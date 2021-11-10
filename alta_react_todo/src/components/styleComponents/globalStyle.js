import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
label,
p,
h3,
h4,
h5 {
    font-family: 'Roboto';
    font-weight: 400;
    color: #19345E;
}

.cust-text-regular {
    font-family: 'Roboto';
    font-weight: 400;
    color: #19345E;
}

.cust-text-medium {
    font-family: 'Roboto';
    font-weight: 500;
    color: #19345E;
}

.cust-text-bold {
    font-family: 'Roboto';
    font-weight: 700;
    color: #19345E;
}

.cust-btn-primary {
    background: #F47522;
    color: white;
    padding: 10px 28px 10px 28px;
    border: none;
    border-radius: 20px;
}

a.cust-btn-primary {
    color: white;
    text-decoration: none;
    background: #F47522;
    padding: 10px 28px 10px 28px;
    border-radius: 20px;
}

.navbar-light .nav-item.active .nav-link,
.navbar-light .nav-item .nav-link:active,
.navbar-light .nav-item .nav-link:focus,
.navbar-light .nav-item:hover .nav-link {
    color: #202020;
}

.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav>.nav-link {
    color: #F47522;
}

.navbar-light .navbar-nav .nav-link {
    color: #19345E;
}

#hero {
    margin-top: 114px;
}

.imgoverlay {
    position: absolute;
    /* display: block; */
    /* width: 468px; */
    height: 100vh;
    background: rgba(25, 52, 94, 0.65);
}

td {
    padding-right: 20px;
    word-break: break-all;
    vertical-align: top;
}
`;

export default GlobalStyle;