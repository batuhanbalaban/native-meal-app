import React from 'react';
import { Text } from 'react-native';


const TextDefault = props => { return (<Text style={{ fontFamily:'open-sans', ...props.style }}>{props.children}</Text>) };

export default TextDefault;