import axios from 'axios';
import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {useUsuarios} from '../hooks/useUsuarios';

export const Index = () => {
  const {usuarios, paginaSiguiente, paginaAnterior} = useUsuarios();

  const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{width: 35, borderRadius: 100}}
          />
        </td>
        <td>
          {' '}
          {first_name} {last_name}{' '}
        </td>
        <td> {email} </td>
      </tr>
    );
  };

  return (
    <ScrollView>
      <View>
        <Text>Hola este es el menú de admin</Text>
        <Text>Usuarios:</Text>
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{usuarios.map(usuario => renderItem(usuario))}</tbody>
        </table>
        <button className="btn btn-primary" onClick={paginaAnterior}>
          Anteriores
        </button>
        &nbsp;
        <button className="btn btn-primary" onClick={paginaSiguiente}>
          Siguientes
        </button>
      </View>
    </ScrollView>
  );
};

export default Index;
