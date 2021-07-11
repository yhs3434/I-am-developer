import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TRANSPARENT = 'transparent';

const Container = styled.TouchableOpacity`
    background-color: ${({theme, isFilled}) =>
        isFilled ? theme.buttonBackground : TRANSPARENT};
    align-items: center;
    border-radius: 4px;
    width: 100%;
    padding: 10px;
    opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

const Title = styled.Text`
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: ${({theme, isFilled}) =>
        isFilled ? 'gray' : 'blue'};
`;

const Button = ({containerStyle, disabled,title, onPress, isFilled}) => {
    return (
        <Container
            style={containerStyle}
            onPress={onPress}
            isFilled={isFilled}
            disabled={disabled}
        >
            <Title isFilled={isFilled}>{title}</Title>
        </Container>
    )
};

Button.defaultProps = {
    isFilled: true,
};

Button.propTypes = {
    containerStyle: PropTypes.object,
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    isFilled: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Button;