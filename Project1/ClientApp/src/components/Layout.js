import NavMenu from './NavMenu/NavMenu';

export default function Layout(props) {
  const links = [
    { link: '/', label: 'Home' },
    { link: '/FAQ', label: 'Preguntas' },
    { link: '/clasificacion', label: 'Clasificación'},
    { link: '/Player12&13', label: 'Jugador 12 y 13' },
    { link: '/Contacto', label: 'Contacto'}
  ];

  return (
    <div>
      <NavMenu links={links} />
      {props.children}
    </div>
  );
}
