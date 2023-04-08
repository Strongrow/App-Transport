import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { BackgroundWhiteCenter } from '../components/BackgroundWhitecenter';
import { Background } from '../components/Backgroundyellow';
import { BackgroundGray } from '../components/Backgroundray';
import { loginStyles } from '../theme/LoginTheme';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {

  const { usuario, contraseña, nombre, correo, onChange } = useForm({
    usuario: '',
    contraseña: '',
    nombre: '',
    correo: ''
  });

  const onRegister = () => {
    console.log({ usuario, contraseña, nombre, correo });
    Keyboard.dismiss();
  }

  return (
    <>
      <BackgroundWhiteCenter />
      <Background />
      <BackgroundGray />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
        keyboardVerticalOffset={110}
      >
        <ScrollView >
          <View style={loginStyles.formContainer}>
            <Text style={loginStyles.title}>Registro</Text>

            <Text style={loginStyles.label}>Nombre</Text>
            <TextInput
              placeholder='Ingrese su Nombre:'
              placeholderTextColor={'rgba(92,92,92,0.4)'}
              underlineColorAndroid={'black'}

              style={[
                loginStyles.inputField,
                (Platform.OS === 'ios') && loginStyles.inputFieldIOS
              ]}
              selectionColor={'black'}

              onChangeText={(value) => onChange(value, 'usuario')}
              value={usuario}
              onSubmitEditing={onRegister}

              autoCapitalize='words'
              autoCorrect={false}

            />
            <Text style={loginStyles.label}>Usuario</Text>
            <TextInput
              placeholder='Ingrese su Usuario:'
              placeholderTextColor={'rgba(92,92,92,0.4)'}
              underlineColorAndroid={'black'}
              style={[
                loginStyles.inputField,
                (Platform.OS === 'ios') && loginStyles.inputFieldIOS
              ]}
              selectionColor={'black'}

              onChangeText={(value) => onChange(value, 'usuario')}
              value={usuario}
              onSubmitEditing={onRegister}

              autoCapitalize='none'
              autoCorrect={false}

            />

            <Text style={loginStyles.label}>Email</Text>
            <TextInput
              placeholder='Ingrese su Email:'
              placeholderTextColor={'rgba(92,92,92,0.4)'}
              underlineColorAndroid={'black'}
              keyboardType='email-address'

              style={[
                loginStyles.inputField,
                (Platform.OS === 'ios') && loginStyles.inputFieldIOS
              ]}
              selectionColor={'black'}

              onChangeText={(value) => onChange(value, 'usuario')}
              value={usuario}
              onSubmitEditing={onRegister}

              autoCapitalize='words'
              autoCorrect={false}

            />



            <Text style={loginStyles.label}>Contraseña</Text>
            <TextInput
              placeholder='Ingrese su Constraseña:'
              placeholderTextColor={'rgba(92,92,92,0.4)'}
              underlineColorAndroid={'black'}
              secureTextEntry={true}
              style={[
                loginStyles.inputField,
                (Platform.OS === 'ios') && loginStyles.inputFieldIOS
              ]}
              selectionColor={'black'}

              onChangeText={(value) => onChange(value, 'contraseña')}
              value={contraseña}
              onSubmitEditing={onRegister}

              autoCapitalize='none'
              autoCorrect={false}

            />

            {/* Boton login */}

            <View style={loginStyles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={onRegister}
              >
                <Text style={loginStyles.buttonText}>Crear Usuario</Text>

              </TouchableOpacity>
            </View>
            <View style={loginStyles.newUserContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.replace('LoginScreens')}
              >
                <Text style={loginStyles.buttonTextRegister}>Iniciar Sesión</Text>

              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('LoginScreens')}
              style={loginStyles.buttonReturn}>
              <Text style={loginStyles.buttonText}>Login</Text>

            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>


    </>
  )
}