import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from "../components/Footer/Footer";
import MenuEditor from '../components/MenuEditor/MenuEditor';
import "./MenuEditor.scss";

function MenuEditorPage() {
    return ( <>
        <nav>
          <Navbar/>  
        </nav>
        <div className="createMenu__container-section">
          <div className="createMenu__sidebar">
            <Sidebar className="bg-light"/>
          </div>

          <div className="createMenu__content">
            <MenuEditor/>

            <div className='container__prev'>
              <h3>Previsualizacion</h3>
            </div>
          </div>
        </div>
        <footer className='container-fluid d-flex 3fr 3fr 3fr 3fr'>
          <Footer/>
        </footer>
        </>
      )
    }

export default MenuEditorPage