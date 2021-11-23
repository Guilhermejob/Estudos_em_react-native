import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import FlexBoxV3 from './components/Layout/FlexBoxV3';

// import FlexBoxV2 from './components/Layout/FlexBoxV2';
// import FlexBoxV2 from './components/Layout/FlexBoxV1';
// import Quadrado from './components/Layout/Quadrado';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutoV2 from './components/produtos/ListaProdutoV2';
// import ListaProdutoV2 from './components/produtos/ListaProdutoV2';
// import UsuarioLogado from './components/UsuarioLogado';
// import Pai from './components/relacao/Pai';
// import Filho from './components/relacao/Filho';
// import ParImpar from './components/ParImpar';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Pai from './components/indireta/Pai';
// import Contador from './components/contador';
// import Botao from './components/Botao';
// import Title from './components/Titulo';
// import Primeiro from './components/primeiro';
// import Comp, {Comp2, Comp1} from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';

export default () => (
  <SafeAreaView style={style.App}>
    <FlexBoxV3 />
    {/*
    <FlexBoxV2 />
    <FlexBoxV1 />
    <DigiteSeuNome />
    <ListaProdutoV2 />
    <UsuarioLogado
      usuario={{name: 'Guilherme', email: 'guilhermejob047@gmail.com'}}
    />
    <UsuarioLogado usuario={{name: 'Guilherme'}} />
    <UsuarioLogado usuario={{email: 'guilhermejob047@gmail.com'}} />
    <Pai>
      <Filho name="Guilherme" suName="Job" />
      <Filho name="Tinho" suName="Job" />
    </Pai>
    <ParImpar num={3} />
    <Diferenciar />
    <ContadorV2 />
    <Pai />
    <Title principal="Ola mundo" secundario="Estou aprendendo react-native" />
  <Contador inicial={15} />
    <Botao />
    <Primeiro />
    <Comp />
    <Comp1 />
    <Comp2 />
    <MinMax min="3" max="4" />
    <Aleatorio rangeMin={15} rangeMax={20} /> */}
  </SafeAreaView>
);

// const App = function () {
//   const text = 'Hello world';
//   return <Text> {text} </Text>;
// };

// export default App;

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
