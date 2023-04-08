import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { BackgroundWhiteCenter } from '../components/BackgroundWhitecenter'
import { Background } from '../components/Backgroundyellow'
import { BackgroundGray } from '../components/Backgroundray'
import { StackScreenProps } from '@react-navigation/stack';
import { menuStyles } from '../theme/MenuTheme';
import { faBell, faCircle, faCommentDots, faHome, faMapLocationDot, faPlus, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useForm } from '../hooks/useForm';
import { BackgraundLine } from '../components/BackgraundLine';


interface Props extends StackScreenProps<any, any> { }
export const MenuScreens = ({ navigation }: Props) => {
    const { count } = useForm({
        count: 0
    });

    return (
        <>
            <BackgroundWhiteCenter />
            <Background />
            <BackgroundGray />
            <BackgraundLine />
            <View>
                <Text style={menuStyles.title}>Menu</Text>
                <TouchableOpacity onPress={() => navigation.replace('MenuScreens')}>
                    <View style={menuStyles.containerBell}>
                        <FontAwesomeIcon icon={faBell} size={80} color="black" />
                        <Text style={menuStyles.textUser}>Comunicaciones</Text>
                        {count > 0 && (
                            <View style={menuStyles.badge}>
                                <FontAwesomeIcon icon={faCircle} size={44} color="red" />
                                <Text style={menuStyles.count}>{count}</Text>
                            </View>
                        )
                        }
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                    <View style={menuStyles.containerUser}>
                        <FontAwesomeIcon icon={faUser} size={80} color="black" />
                        <Text style={menuStyles.textUser}>Crea Usuario</Text>
                        <View style={menuStyles.badgeUser}>
                            <FontAwesomeIcon icon={faCircle} size={25} color="black" />
                            <View style={menuStyles.userPlus}>
                                <FontAwesomeIcon icon={faPlus} size={15} color="white" />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.replace('PositionScreen')}>
                    <View style={menuStyles.containerPosition}>
                        <FontAwesomeIcon icon={faMapLocationDot} size={80} color="black" />
                        <Text style={menuStyles.textUser}>Posición Supervisores</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.replace('ChatScreen')}>
                    <View style={menuStyles.containerChat}>
                        <FontAwesomeIcon icon={faCommentDots} size={80} color="black" />
                        <Text style={menuStyles.textUser}>Chat</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.replace('LoginScreens')}>
                    <View style={menuStyles.containerLogOut}>
                        <FontAwesomeIcon icon={faSignOut} size={40} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.replace('MenuScreens')}>
                    <View style={menuStyles.containerInicio}>
                        <FontAwesomeIcon icon={faHome} size={40} color="black" />
                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}
