import React, { useEffect, useRef } from "react";
import "./menu.scss";
import YoutubeLogo from "../images/yt-med.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
function Menu({ menuOpen, setMenuOpen, menuBackdrop }) {
  const sideMenu = useRef();

  useEffect(() => {
    menuOpen === true
      ? (sideMenu.current.style.transform = "translateX(0px)")
      : (sideMenu.current.style.transform = "translateX(-100%)");
  }, [menuOpen]);

  useEffect(()=>{
    console.log('adding')
    document.querySelectorAll('.item').forEach((item) => {
      item.addEventListener('click',()=> {
        handleMenuClose()
      });
    })
    return ()=> {
      console.log('removing')
      document.querySelectorAll('item').forEach((item) => {
        item.removeEventListener("click", handleMenuClose);
      })
    }
  },[])


  function handleMenuClose(e) {
    console.log('executing')
    setMenuOpen(false);
    menuBackdrop.current.style.opacity = "0";
    menuBackdrop.current.style.zIndex = "-1";
  }

  return (
    <div className="menu" ref={sideMenu}>
      <div className="wrapper">
        <div className="burguer-wrapper">
          <MenuOutlinedIcon className="burguer" onClick={handleMenuClose} />
          <Link to='/'>
            <div className="logo">
              <img src={YoutubeLogo} alt="" />
              YouTube
            </div>
          </Link>
        </div>
        <Link className="item" to="/">
          <HomeIcon />
          Principal
        </Link>
        <div className="item">
          <ExploreOutlinedIcon />
          Shorts
        </div>
        <Link className="item" to="/subscriptions">
          <SubscriptionsOutlinedIcon />
          Suscripciones
        </Link>
        <hr />
        <div className="item">
          <VideoLibraryOutlinedIcon />
          Biblioteca
        </div>
        <div className="item">
          <HistoryOutlinedIcon />
          Historial
        </div>
        <div className="item">
          <HistoryOutlinedIcon />
          Tus Videos
        </div>
        <div className="item">
          <HistoryOutlinedIcon />
          Ver mas tarde
        </div>
        <div className="item">
          <HistoryOutlinedIcon />
          <span>Videos que me gustan</span>
        </div>
        <hr />
        <h2>Suscripciones</h2>
        <div className="item">
          <LibraryMusicOutlinedIcon />
          Channel 1
        </div>
        <div className="item">
          <LibraryMusicOutlinedIcon />
          Channel 2
        </div>
        <div className="item">
          <LibraryMusicOutlinedIcon />
          Channel 3
        </div>
        <div className="item">
          <LibraryMusicOutlinedIcon />
          Channel 4
        </div>
        <hr />
        <h2>Explorar</h2>
        <Link className="item" to="/trends">
          <LibraryMusicOutlinedIcon />
          Tendencias
        </Link>
        <div className="item">
          <LibraryMusicOutlinedIcon />
          Musica
        </div>
        <div className="item">
          <MovieOutlinedIcon />
          Peliculas
        </div>
        <div className="item">
          <LiveTvOutlinedIcon />
          En vivo
        </div>
        <div className="item">
          <SportsEsportsOutlinedIcon />
          Videojuegos
        </div>
        <div className="item">
          <SportsEsportsOutlinedIcon />
          Noticias
        </div>
        <div className="item">
          <SportsBasketballOutlinedIcon />
          Deportes
        </div>
        <div className="item">
          <ArticleOutlinedIcon />
          Aprendizaje
        </div>
        <hr />
        <h2>Mas de YouTube</h2>
        <div className="item">
          <SettingsOutlinedIcon />
          YouTube Premium
        </div>
        <div className="item">
          <SettingsOutlinedIcon />
          Creator Studio
        </div>
        <div className="item">
          <SettingsOutlinedIcon />
          YouTube Music
        </div>
        <div className="item">
          <SettingsOutlinedIcon />
          YouTube Kids
        </div>
        <div className="item">
          <SettingsOutlinedIcon />
          YouTube TV
        </div>
        <hr />
        <div className="item">
          <SettingsOutlinedIcon />
          Configuracion
        </div>
        <div className="item">
          <FlagOutlinedIcon />
          Historial de denuncias
        </div>
        <div className="item">
          <HelpOutlineOutlinedIcon />
          Ayuda
        </div>
        <div className="item">
          <HelpOutlineOutlinedIcon />
          Enviar comentarios
        </div>

        <hr />
        <p className="legals">Acerca de Prensa</p>
        <p className="legals">Derechos de Autor</p>
        <p className="legals">Comunicarte con Nosotros</p>
        <p className="legals">Creadores</p>
        <p className="legals">Anunciar</p>
        <p className="legals">Desarrolladores</p>
        <br />
        <p className="legals">Condiciones</p>
        <p className="legals">Privacidad</p>
        <p className="legals">Politicas y Seguridad</p>
        <p className="legals">Como funciona YouTube</p>
        <p className="legals">Prueba funciones nuevas</p>
        <p className="copyright">© 2023 Google LLC</p>
      </div>
    </div>
  );
}

export default Menu;
