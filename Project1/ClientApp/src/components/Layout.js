import NavMenu from './NavMenu/NavMenu';

export default function Layout(props) {
  const links = [
    { link: '/', label: 'Inicio' },
    { link: '/FAQ', label: 'Preguntas' },
    { link: '/clasificacion', label: 'Clasificación'},
    { link: '/Player12&13', label: 'Jugadores' },
    { link: '/Contacto', label: 'Contacto'}
  ];

  return (
    <div>
      <NavMenu links={links} />
      {props.children}
    </div>
  );
}
