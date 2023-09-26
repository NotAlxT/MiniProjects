import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import './home.css'

export default function Home() {

    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    };

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return (
        <div >
            <div className={`homeContainer`}>

                <div className='themeContainer'>
                    <input className="themeMode" type="checkbox" id="checkbox" onClick={toggleTheme} />
                    <label for='checkbox' className="switch">
                        <div className="powersign"></div>
                    </label>
                </div>

                <section className="projectContainer">
                    <div className="project">
                        {/* TODO add img, add link, add design for box layout */}
                        <div className="container">
                            <article className="card">
                                <a className="card__link" href="/calculator">

                                    <div className="card__icon">
                                        <Icon className='Icon' color="white" width="50" height="50" icon="solar:calculator-broken" />
                                    </div>


                                    <div className="card__media">
                                        <Icon className='Icon' color="white" width="200" height="200" icon="solar:calculator-broken" />
                                    </div>


                                    <div className="card__header">
                                        <p className="card__header-title">Calculator</p>
                                        <p className="card__header-meta">Click to use</p>
                                        <div className="card__header-icon">
                                            <svg viewBox="0 0 28 25">
                                                <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" fill="#fff"></path>
                                            </svg>
                                        </div>
                                    </div>

                                </a>
                            </article>
                        </div>
                    </div>

                    <div className="project">
                        {/* TODO add img, add link, add design for box layout */}
                        <div className="container">
                            <article className="card">
                                <a className="card__link" href="/calculator">

                                    <div className="card__icon">
                                        <Icon className='Icon' icon="ion:timer-outline" color="white" width="50" height="50" />
                                    </div>


                                    <div className="card__media">
                                        <Icon className='Icon' icon="ion:timer-outline" color="white" width="200" height="200" />
                                    </div>


                                    <div className="card__header">
                                        <p className="card__header-title">Timer</p>
                                        <p className="card__header-meta">Click to use</p>
                                        <div className="card__header-icon">
                                            <svg viewBox="0 0 28 25">
                                                <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" fill="#fff"></path>
                                            </svg>
                                        </div>
                                    </div>

                                </a>
                            </article>
                        </div>
                    </div><div className="project">
                        {/* TODO add img, add link, add design for box layout */}
                        <div className="container">
                            <article className="card">
                                <a className="card__link" href="/calculator">

                                    <div className="card__icon">
                                        <Icon className='Icon' icon="vscode-icons:file-type-todo" color="white" width="50" height="50" />
                                    </div>


                                    <div className="card__media">
                                        <Icon className='Icon' icon="vscode-icons:file-type-todo" color="white" width="200" height="200" />
                                    </div>


                                    <div className="card__header">
                                        <p className="card__header-title">Todo List</p>
                                        <p className="card__header-meta">Click to use</p>
                                        <div className="card__header-icon">
                                            <svg viewBox="0 0 28 25">
                                                <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" fill="#fff"></path>
                                            </svg>
                                        </div>
                                    </div>

                                </a>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
