/* eslint-disable global-require */
import React, { useEffect } from 'react';
import M from 'materialize-css';
import './styles.css';
import china from '../../assets/countries/china.jpg';
import paris from '../../assets/countries/paris.jpg';

export default function Main() {
  useEffect(() => {
    // Auto initialize all the things!
    M.AutoInit();
  }, []);

  return (
    <>
      <div className="parallax-container">
        <div className="parallax"><img src={paris} alt="" width="50%;" /></div>
      </div>

      <div>
        <p className="font"> Melhores preços</p>
      </div>

      <div className="flex" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="fl">
          <div style={{ marginLeft: '25px', marginRight: '25px' }} className="tamanho_card fl">
            <div className="card">
              <div className="card-image">
                <img className="card_img" alt="" src={china} />
                <span className="card-title">Hong Kong - China</span>
              </div>
              <div className="card-content">
                <p>● Curso de inglês</p>
                <p>● Acomodação em casa de familia</p>
                <p>● Duração de 12 meses</p>
                <p>●Taxas inclusas</p>
              </div>
              <div className="card-action">
                <a href="/">
                  <p>Entrada +</p>
                  <p>12x de R$506,90</p>
                </a>
                <a href="/" style={{ position: 'absolute', marginTop: '-28px' }} className="waves-effect waves-light btn-large right">Eu Quero</a>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: '25px', marginRight: '25px' }} className="tamanho_card fl">
            <div className="card">
              <div className="card-image">
                <img className="card_img" alt="" src={china} />
                <span className="card-title">Hong Kong - China</span>
              </div>
              <div className="card-content">
                <p>● Curso de inglês</p>
                <p>● Acomodação em casa de familia</p>
                <p>●Duração de 12 meses</p>
                <p>●Taxas inclusas</p>
              </div>
              <div className="card-action">
                <a href="/">
                  <p>Entrada +</p>
                  <p>12x de R$506,90</p>
                </a>
                <a href="/" style={{ position: 'absolute', marginTop: '-28px' }} className="waves-effect waves-light btn-large right">Eu Quero</a>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: '25px', marginRight: '25px' }} className="tamanho_card fl">
            <div className="card">
              <div className="card-image">
                <img alt="" className="card_img" src={china} />
                <span className="card-title">Hong Kong - China</span>
              </div>
              <div className="card-content">
                <p>● Curso de inglês</p>
                <p>● Acomodação em casa de familia</p>
                <p>● Duração de 12 meses</p>
                <p>● Taxas inclusas</p>
              </div>
              <div className="card-action">
                <a href="/">
                  <p>Entrada +</p>
                  <p>12x de R$506,90</p>
                </a>
                <a href="/" style={{ position: 'absolute', marginTop: '-28px' }} className="waves-effect waves-light btn-large right">Eu Quero</a>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: '25px', marginRight: '25px' }} className="tamanho_card fl">
            <div className="card">
              <div className="card-image">
                <img alt="" className="card_img" src={china} />
                <span className="card-title">Hong Kong - China</span>
              </div>
              <div className="card-content">
                <p>● Curso de inglês</p>
                <p>● Acomodação em casa de familia</p>
                <p>● Duração de 12 meses</p>
                <p>● Taxas inclusas</p>
              </div>
              <div className="card-action">
                <a href="/">
                  <p>Entrada +</p>
                  <p>12x de R$506,90</p>
                </a>
                <a href="/" style={{ position: 'absolute', marginTop: '-28px' }} className="waves-effect waves-light btn-large right">Eu Quero</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="limpar" />

      <div>
        <p className="font">Viva um intercâmbio</p>
      </div>

      <div className="limpar" />

      <div className="principal_div_filter">
        <div className="sub_filter">
          <div className="filter">
            <div
              className="flip-container"
              ontouchstart="this.classNameList.toggle('hover');"
            >
              <div className="flipper">
                <div className="front p_div_filter a" style={{ backgroundImage: `url(${require('../../assets/thumbnails/1.jpg')})` }}>
                  <p>
                      Férias Teen
                  </p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Férias Teen</b>
                    </p>
                    <p className="font_div_back_text">O Intercâmbio de Férias Teen combina aprendizado a diversão, fazendo com que o participante tenha uma experiência única durante as férias.</p>
                  </div>
                  <div className="flex botao">
                    <a href="/" className="waves-effect waves-light btn">Eu quero</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter">
            <div
              className="flip-container"
              ontouchstart="this.classNameList.toggle('hover');"
            >
              <div className="flipper">
                <div className="front p_div_filter a2" style={{ backgroundImage: `url(${require('../../assets/thumbnails/2.jpg')})` }}>
                  <p>
                  Curso de idiomas
                  </p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Curso de idioma</b>
                    </p>
                    <p className="font_div_back_text">Os cursos regulares são os programas voltados para a aprendizagem ou aperfeiçoamento do idioma, tendo cargas horárias que variam de acordo com a empresa.</p>
                  </div>
                  <div className="flex botao">
                    <a href="/" className="waves-effect waves-light btn">Eu quero</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub_filter">
          <div className="filter">
            <div
              className="flip-container"
              ontouchstart="this.classNameList.toggle('hover');"
            >
              <div className="flipper">
                <div className="front p_div_filter a3" style={{ backgroundImage: `url(${require('../../assets/thumbnails/3.jpg')})` }}>
                  <p>
                    Estudo e Trabalho
                  </p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Estudo e trabalho</b>
                    </p>
                    <p className="font_div_back_text">Intercâmbio que combina curso de inglês com a possibilidade de emprego remunerado no exterior. Oportunidade ideal para quem quer aperfeiçoar o idioma, ter a chance de morar em outro país e conseguir recuperar parte do investimento trabalhando.</p>
                  </div>
                  <div className="flex botao">
                    <a href="/" className="waves-effect waves-light btn">Eu quero</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter">
            <div
              className="flip-container"
              ontouchstart="this.classNameList.toggle('hover');"
            >
              <div className="flipper">
                <div className="front p_div_filter a4" style={{ backgroundImage: `url(${require('../../assets/thumbnails/4.jpg')})` }}>
                  <p> Word Experience</p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Work Experience</b>
                    </p>
                    <p className="font_div_back_text">Programa exclusivo para estudantes universitários que querem embarcar em um intercâmbio de trabalho durante as férias de final de ano, entre dezembro e março.</p>
                  </div>
                  <div className="flex botao">
                    <a href="/" className="waves-effect waves-light btn">Eu quero</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub_filter">
          <div className="filter">
            <div
              className="flip-container"
              ontouchstart="this.classNameList.toggle('hover');"
            >
              <div className="flipper">
                <div className="front p_div_filter a5" style={{ backgroundImage: `url(${require('../../assets/thumbnails/5.jpg')})` }}>
                  <p>
                    Aupair
                  </p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Aupair</b>
                    </p>
                    <p className="font_div_back_text">O Au Pair é oferecido apenas mulheres, ideal para quem quer vivenciar o cotidiano de uma família estrangeira. A participante vai ter uma experiência de imersão nos hábitos e modo de vida local com remuneração a partir de $ 195,75 por semana.</p>
                  </div>
                  <div className="flex botao">
                    <a href="/" className="waves-effect waves-light btn">Eu quero</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter">
            <div
              className="flip-container"
              ontouchstart="this.classNameList.toggle('hover');"
            >
              <div className="flipper">
                <div className="front p_div_filter a6" style={{ backgroundImage: `url(${require('../../assets/thumbnails/6.jpg')})` }}>
                  <p> Universidade</p>
                </div>
                <div className="back">
                  <div className="p_div_center">
                    <p className="font_div_back_text">
                      <b className="font_div_back_titulo">Universidade</b>
                      <br />
                    </p>
                    <p className="font_div_back_text">Programa exclusivo para estudantes universitários que querem embarcar em um intercâmbio de trabalho durante as férias de final de ano, entre dezembro e março.</p>
                  </div>
                  <div className="flex botao">
                    <a href="/" className="waves-effect waves-light btn">Eu quero</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
