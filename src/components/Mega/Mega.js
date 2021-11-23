/* eslint-disable radix */
import React from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';
import estilo from '../estilo';
import NumerosDisplay from './NumerosDisplay';

export default class Mega extends React.Component {
  state = {
    qntdNum: this.props.qntdNum,
    numeros: [],
  };

  alterarQtdeNumero = qtde => {
    this.setState({qntdNum: +qtde});
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qntdNum)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({numeros});
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return <NumerosDisplay num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={estilo.fontEG}>
          Gerador de mega sena {this.state.qntdNum}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{borderBottomWidth: 1}}
          placeholder="Qtde de Números"
          value={`${this.state.qntdNum}`}
          onChangeText={this.alterarQtdeNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View style={style.Container}>{this.exibirNumeros()}</View>
      </>
    );
  }
}

const style = StyleSheet.create({
  Container: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
