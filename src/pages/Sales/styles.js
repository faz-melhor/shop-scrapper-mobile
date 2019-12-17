import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const Sale = styled.TouchableOpacity`
  margin: 10px 5px;
`;

export const Description = styled.Text`
  color: #2b0549;
`;

export const Divider = styled.View`
  border-bottom-color: #eee;
  border-bottom-width: 1px;
`;
