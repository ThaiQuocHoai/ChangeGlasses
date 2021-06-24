import React, { Component } from 'react'
import style from './BaiTapGlass.module.css'

export default class BaiTapGlass extends Component {

    state ={
        imgSrc : './imgs/v1.png'
    }
   

    render() {

        

        return (
            <div className={style.background__img}>
                <img src="./imgs/bg.jpg" alt="" />
                <div className={style.background}></div>
                <div className={style.text}>
                    <h3 className="display-5 text-uppercase">Try Glasses App mobile</h3>
                </div>
                <div className={"row", style.human}>
                    <img src="./imgs/model.jpg" alt="" />
                </div>
                <div className={style.glasses}>
                    <img src={this.state.imgSrc} alt="" />
                </div>

                <div className="container chooser">
                    <div className="row">
                        <div className="col-2" onClick={() =>{
                            this.setState({
                                imgSrc: './imgs/v1.png'
                            });
                        }}>
                            <img src="./imgs/g1.jpg" alt="" />
                        </div>
                        <div className="col-2" onClick={() =>{
                            this.setState({
                                imgSrc: './imgs/v2.png'
                            })
                        }}>
                            <img src="./imgs/g2.jpg" alt="" />
                        </div>
                        <div className="col-2" onClick={() =>{
                            this.setState({
                                imgSrc: './imgs/v3.png'
                            })
                        }}>
                            <img src="./imgs/g3.jpg" alt="" />
                        </div>
                        <div className="col-2" onClick={() =>{
                            this.setState({
                                imgSrc: './imgs/v4.png'
                            })
                        }}>
                            <img src="./imgs/g4.jpg" alt="" />
                        </div>
                        <div className="col-2" onClick={() =>{
                            this.setState({
                                imgSrc: './imgs/v5.png'
                            })
                        }}>
                            <img src="./imgs/g5.jpg" alt="" />
                        </div>
                        <div className="col-2" onClick={() =>{
                            this.setState({
                                imgSrc: './imgs/v6.png'
                            })
                        }}>
                            <img src="./imgs/g6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2" onClick={() =>{
                            this.setState({
                                imgSrc: './imgs/v7.png'
                            })
                        }}>
                            <img src="./imgs/g7.jpg" alt="" />
                        </div>
                        <div className="col-2" onClick={() =>{
                            this.setState({
                                imgSrc: './imgs/v8.png'
                            })
                        }}>

                            <img src="./imgs/g8.jpg" alt="" />
                        </div>
                        <div className="col-2" onClick={() =>{
                            this.setState({
                                imgSrc: './imgs/v9.png'
                            })
                        }}>
                            <img src="./imgs/g9.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
