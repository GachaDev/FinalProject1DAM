import React, { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, useMantineTheme, rem, Button } from '@mantine/core';
import {UseAdmin} from '../../../Zustand/UseAdmin'
import ModalInsertNoticia from './ModalInsertNoticia';
import { useDisclosure } from '@mantine/hooks';
import { Trash, Edit } from 'tabler-icons-react';
import { ActionIcon } from '@mantine/core';
import ModalEditNoticia from './ModalEditNoticia';
import ModalInsertCartel from './ModalInsertCartel';
import ModalInsertJornada from './ModalInsertJornada';
import ModalInsertPartido from './ModalInsertPartido';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(450),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },
  
  date: {
    color: theme.white,
    fontSize: rem(14),
    marginTop: theme.spacing.xs,
  },
}));

function Card({ id, imagen, frase, fecha, fetchData, openModal, setFrase, setImagen, setFecha, setId }) {
  const { classes } = useStyles();
  const { Admin } = UseAdmin();
  const handleDeleteNotice = async (id) => {
    try {
      const response = await fetch(`https://localhost:7233/api/Noticias/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
        fetchData();
      } else {
        console.log('Error al eliminar la noticia');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${imagen})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {frase}
        </Title>
        <Text className={classes.date}>{fecha}</Text>
        {Admin ? <div style={{ display: 'flex', flexDirection:'row' }}>
          <ActionIcon variant="transparent" size="lg" className={'socialIcon'}>
            <Edit
              size={20}
              onClick={()=> {setId(id);setFrase(frase);setImagen(imagen);setFecha(fecha);openModal();}}
              strokeWidth={2}
              color={'white'}
            />
          </ActionIcon>
          <ActionIcon variant="transparent" size="lg" className={'socialIcon'}>
            <Trash
              size={20}
              onClick={() => {handleDeleteNotice(id)}}
              strokeWidth={2}
              color={'white'}
            />
          </ActionIcon>
        </div> : null}
      </div>
    </Paper>
  );
}



export default function CarouselE() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [firstTime, setFirstTime] = useState(false);
  const { Admin, setCartel, setPartidos } = UseAdmin();
  const [data, setData] = useState([])
  const [frase, setFrase] = useState('')
  const [imagen, setImagen] = useState('')
  const [fecha, setFecha] = useState('')
  const [fechaJ, setFechaJ] = useState('')
  const [id, setId] = useState('')
  const [idJugador, setIdJugador] = useState('')
  const [texto1, setTexto1] = useState('')
  const [texto2, setTexto2] = useState('')
  const [idJornada, setIdJornada] = useState('1');
  const [hora, setHora] = useState('');
  const [golesLocal, setGolesLocal] = useState('');
  const [golesVisitante, setGolesVisitante] = useState('');
  const [equipoLocal, setEquipoLocal] = useState('');
  const [equipoVisitante, setEquipoVisitante] = useState('');
  const [opened, { open, close }] = useDisclosure(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartelModalOpen, setIsCartelModalOpen] = useState(false);
  const [isJornadaModalOpen, setIsJornadaModalOpen] = useState(false);
  const [isPartidoModalOpen, setIsPartidoModalOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setTimeout(() => setForceUpdate((prevState) => !prevState), 1);
    }

    if (!firstTime) {
      setTimeout(() => setForceUpdate((prevState) => !prevState), 600);
      setFirstTime(true);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobile, firstTime]);

  const fetchNotices = () => {
    fetch('https://localhost:7233/api/Noticias')
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => console.error('Error al obtener los datos de la API:', error));
  };

  const editNotice = async () => {
    try {
      const updatedNotice = {
        id: id,
        fecha: fecha,
        imagen: imagen,
        frase: frase
      };
  
      const response = await fetch(`https://localhost:7233/api/Noticias/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedNotice)
      });
  
      if (response.ok) {
        console.log('Noticia editada con éxito');
        fetchNotices(); // Vuelve a cargar los datos actualizados
      } else {
        console.log('Error al editar la noticia');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    setId('');
    setImagen('');
    setFecha('');
    setFrase('');
    setIsModalOpen(false);
  };  

  useEffect(() => {
    fetchNotices()
  }, [])

  const handleInsertNotice = async () => {
    const newNotice = {
      imagen: imagen,
      frase: frase,
      fecha: fecha
    };
    try {
      const response = await fetch('https://localhost:7233/api/Noticias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNotice)
      });
  
      if (!response.ok) {
        throw new Error('Error al crear la noticia');
      }
  
      const data = await response.json();
      console.log('Respuesta:', data);
      fetchNotices();
    } catch (error) {
      console.error('Error:', error);
    }
  
    close();
  };

  const handleInsertCartel = async () => {
    const newC = {
      id: idJugador,
      texto1: texto1,
      texto2: texto2,
      imagen: '',
      equipo: '',
      background: '',
      nombre: ''
    };
    
    console.log(newC)
    try {
      const response = await fetch('https://localhost:7233/api/TCartels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newC)
      });
  
      if (!response.ok) {
        throw new Error('Error al crear la noticia');
      }
      fetch('https://localhost:7233/api/TCartels')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCartel(data);
      })
    .catch(error => console.error('Error al obtener los datos de la API:', error));
      const data = await response.json();
      console.log('Respuesta:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    setIsCartelModalOpen(false);
  }; 

  const handleInsertJornada = async () => {
    try {
      const response = await fetch('https://localhost:7233/api/TJornadas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fecha: fechaJ })
      });
  
      if (response.ok) {
        console.log('Jornada creada con éxito');
      } else {
        console.log('Error al crear la jornada');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    setFechaJ('');
    setIsJornadaModalOpen(false);
  };



  const handleInsertPartido = async () => {
    const newPartido = {
      Jornada: idJornada,
      hora: hora,
      equipoLocal: equipoLocal,
      equipoVisitante: equipoVisitante,
      golesLocal: golesLocal,
      golesVisitante: golesVisitante,
      inicialesLocal: '',
      inicialesVisitante: '',
      logoLocal: '',
      logoVisitante: '',
      fecha: ''
    };
    try {
      const response = await fetch('https://localhost:7233/api/TPartidoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPartido)
      });
  
      if (response.ok) {
        console.log('Partido creado con éxito');
        fetch('https://localhost:7233/api/TPartidoes')
        .then(response => response.json())
        .then(partidos => {
          const newJornadas = partidos.reduce((acc, partido) => {
            const jornada = acc.find(j => j.title === `Jornada ${partido.jornada}`);
            if (jornada) {
              jornada.matches.push({
                team1: partido.logoLocal,
                team2: partido.logoVisitante,
                team1Initials: partido.inicialesLocal,
                team2Initials: partido.inicialesVisitante,
                finished: true,
                goalsTeam1: partido.golesLocal,
                goalsTeam2: partido.golesVisitante
              });
            } else {
              acc.push({
                title: `Jornada ${partido.jornada}`,
                date: partido.fecha,
                matches: [{
                  team1: partido.logoLocal,
                  team2: partido.logoVisitante,
                  team1Initials: partido.inicialesLocal,
                  team2Initials: partido.inicialesVisitante,
                  finished: true,
                  goalsTeam1: partido.golesLocal,
                  goalsTeam2: partido.golesVisitante
                }]
              });
            }
            return acc;
          }, []);
          setPartidos(newJornadas);
        })
        .catch(error => {
          console.log('Error al obtener los datos de la API:', error);
        });
      } else {
        console.log('Error al crear el partido');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setIsPartidoModalOpen(false);
  };
  

  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card {...item} fetchData={fetchNotices} openModal={() => setIsModalOpen(true)} setFrase={setFrase} setImagen={setImagen} setFecha={setFecha} setId={setId} />
    </Carousel.Slide>
  ));

  return (
    <div key={forceUpdate}>
      {Admin ?
        <div style={{display:'flex', flexDirection:'row', marginLeft: 'auto', marginBottom: '2px'}}>
          <Button onClick={open} style={{display: 'flex', marginLeft: 'auto'}} color="orange" radius="md" size="xs" uppercase>
            Añadir noticia
          </Button>
          <Button onClick={()=>{setIsJornadaModalOpen(true)}} style={{display: 'flex', marginLeft: '10px'}} color="orange" radius="md" size="xs" uppercase>
            Añadir jornada
          </Button>
          <Button onClick={()=>{setIsCartelModalOpen(true)}} style={{display: 'flex', marginLeft: '10px'}} color="orange" radius="md" size="xs" uppercase>
            Añadir cartel
          </Button>
          <Button onClick={()=>{setIsPartidoModalOpen(true)}} style={{display: 'flex', marginLeft: '10px'}} color="orange" radius="md" size="xs" uppercase>
            Añadir partido
          </Button>
        </div>
      : <div style={{marginTop:'2rem'}}> </div>}
      <Carousel
        mx="auto"
        withIndicators
        height={450}
        transition="slide"
        breakpoints={[
          { maxWidth: theme.breakpoints.md, slidesToShow: 1, slidesToScroll: 1 },
          { maxWidth: theme.breakpoints.xl, slidesToShow: 1, slidesToScroll: 1 },
        ]}
      >
        {slides}
      </Carousel>
      <ModalInsertNoticia frase={frase} setFrase={setFrase} imagen={imagen} setImagen={setImagen} fecha={fecha} setFecha={setFecha} opened={opened} close={close} handleInsertNotice={handleInsertNotice} />
      <ModalEditNoticia frase={frase} setFrase={setFrase} imagen={imagen} setImagen={setImagen} fecha={fecha} setFecha={setFecha} openedModal={isModalOpen} closeModal={() => setIsModalOpen(false)} editNotice={editNotice} />
      <ModalInsertCartel id={idJugador} setId={setIdJugador} texto1={texto1} setTexto1={setTexto1} texto2={texto2} setTexto2={setTexto2} opened={isCartelModalOpen} close={() => setIsCartelModalOpen(false)} handleInsertCartel={handleInsertCartel} />
      <ModalInsertJornada fechaJ={fechaJ} setFechaJ={setFechaJ} opened={isJornadaModalOpen} close={() => setIsJornadaModalOpen(false)} handleInsertJornada={handleInsertJornada} />
      <ModalInsertPartido idJornada={idJornada} setIdJornada={setIdJornada} hora={hora} setHora={setHora} golesLocal={golesLocal} setGolesLocal={setGolesLocal} golesVisitante={golesVisitante} setGolesVisitante={setGolesVisitante} equipoLocal={equipoLocal} setEquipoLocal={setEquipoLocal} equipoVisitante={equipoVisitante} setEquipoVisitante={setEquipoVisitante} opened={isPartidoModalOpen} close={() => setIsPartidoModalOpen(false)} handleInsertPartido={handleInsertPartido} />
    </div>
  );
}
