import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component { 
   state = {
      myState: 'kdjfa;lskdjf;laskdjfa;hdsf;sl dkvf;sdfjhasdlfasdkfja;slkdfjasldkfja;slkdfja;sldkfja;lskdfj;slakdfj;laskdfjal;skdfjal;sdkjhsdkfhasldkfhasdkfhsadkfjsa;ldkfjasdfhaskdjfhalskdjfhsakljdfhskdljfhsakldjfsakdfhlksadjhflkasdjfhaskjdfhkasjdfhlkasjdhflkjasdhflaksjdhflkasjdhflksdjhflkasjdhfklsajdhflkajefiuwehflksjadflkjsadfhlkasjhflkasjdhflkajsdhflkjashdflksajdhflkajsdhflkajsdhfklajsdfhlkajsdhfklajsdhflakjshfiurgldbvxzjcbvsfaliusdgviar;asdkhfpaiur;foisdhffjasldkfjlfsk'

   }
   updateState = () => this.setState({ myState: 'The state is updated'})
   render() {
      return (
         <View>
            <Text onPress = {this.updateState}>
               {this.state.myState} 
            </Text>
         </View>
      );
   }
}