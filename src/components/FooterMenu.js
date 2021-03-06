import React, { Component } from 'react';
import { Container, Content } from 'react-bulma-components';
import "sass/footer.scss";

class FooterMenu extends Component {
  render() {
    return (
      <Container>
        <Content style={{ 'text-align': 'center', 'padding': '3rem' }}>
          <p>
            <a href="https://github.com/zendamacf/" target="_blank" rel="noopener noreferrer">
              <img class="github-logo" src="/github-white.png" alt="GitHub Logo" />
            </a>
          </p>
        </Content>
      </Container>
    );
  }
}

export default FooterMenu;