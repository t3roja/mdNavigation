import React from 'react';
import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

export default function MainAppBar(props) {
    const title = getHeaderTitle(props.options, props.route.name);

    return (
        <Appbar.Header>

            {props.back ? (
                <Appbar.BackAction onPress={() => props.navigation.goBack()} />
            ) : null }

            <Appbar.Content title={title} />

            {!props.back ? (
                <Appbar.Action
                    icon="arrow-right"
                    onPress={() => props.navigation.navigate('Second')}
                />
            ) : null }


        </Appbar.Header>
    );
}
