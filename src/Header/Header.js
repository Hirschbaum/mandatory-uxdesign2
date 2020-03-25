import React from 'react';

export default function Header() {
    return (
        <header class="mdc-top-app-bar" style={{ backgroundColor: '#424242' }}>
            <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
                    <span class="mdc-top-app-bar__title">Quiz Bastards</span>
                </section>
            </div>
        </header>
    )
}