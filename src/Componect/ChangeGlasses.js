import React, { Component } from 'react';


export default class ChangeGlasses extends Component {
    state = {
        glasses:
        [
            {
                "id": 1,
                "price": 30,
                "name": "GUCCI G8850U",
                "url": "./glassesImage/v1.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 2,
                "price": 50,
                "name": "GUCCI G8759H",
                "url": "./glassesImage/v2.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 3,
                "price": 30,
                "name": "DIOR D6700HQ",
                "url": "./glassesImage/v3.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 4,
                "price": 70,
                "name": "DIOR D6005U",
                "url": "./glassesImage/v4.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 5,
                "price": 40,
                "name": "PRADA P8750",
                "url": "./glassesImage/v5.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 6,
                "price": 60,
                "name": "PRADA P9700",
                "url": "./glassesImage/v6.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 7,
                "price": 80,
                "name": "FENDI F8750",
                "url": "./glassesImage/v7.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 8,
                "price": 100,
                "name": "FENDI F8500",
                "url": "./glassesImage/v8.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 9,
                "price": 60,
                "name": "FENDI F4300",
                "url": "./glassesImage/v9.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
        ],
    };


    renderGlasses = () => {
      let glassesList = this.state.glasses.map((glass) => {
        return (
          <div className="col-2" key={glass.id}>
            <img
              src={glass.url}
              alt=""
              onClick={() => {
                this.handleChangeGlass(glass.id);
              }}
            />
          </div>
        );
      });
      return glassesList;
    };
  
    handleChangeGlass = (id) => {
      let glass = this.state.glasses.filter((glass) => glass.id == id);
  
      this.setState({
        imgGlass: glass[0].url,
      });
    };
  
    render() {
      return (
        <div>
          <div className="title">
            <h1>TRY GLASS APP ONLINE</h1>
          </div>
          <div className="container">
            <div className="imgListGlass d-flex justify-content-evenly py-4">
              <div className="model_left">
                <img src="./glassesImage/model.jpg" alt="" />
                <div className="glass-model">
                  <img src={this.state.imgGlass} alt="" />
                </div>
              </div>
              <div className="model_right">
                <img src="./glassesImage/model.jpg" alt="" />
              </div>
            </div>
            <div className="glasses bg-light rounded p-3">
              <div className="row g-4">{this.renderGlasses()}</div>
            </div>
          </div>
        </div>
      );
    }
  }
  