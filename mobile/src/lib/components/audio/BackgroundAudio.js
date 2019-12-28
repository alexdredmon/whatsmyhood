import React from 'react'
import { Audio } from 'expo-av'
// import BgAudio from 'react-native-background-audio'

class BackgroundAudioMobile extends React.Component {
  state = {
    loaded: false,
  }
  async componentDidMount() {

    // const {
    //   audio
    // } = this.props

    // // console.log('hey')

    // try {
    //   const { sound: soundObject, status } = await Audio.Sound.createAsync(
    //     audio,
    //     // { uri: 'https://storage.cloud.google.com/wallofads/audio/background.mp3?authuser=1' },
    //     // { shouldPlay: true }
    //     // require('common/assets/audio/background.mp3')
    //     // { shouldPlay: true }
    //   )
    //   // alert(audio)
      
    //   // soundObject.setOnPlaybackStatusUpdate(status => console.log(status))


    //   await soundObject.setIsLoopingAsync(true)
    //   await soundObject.playAsync()
      
    //   // Your sound is playing!
    //   // alert(JSON.dumps(status))
    //   // console.log(soundObject)
    // } catch (error) {
    //   // alert('err')
    //   // console.log(error)
    //   // An error occurred!
    // }


  //   const soundObject = new Audio.Sound()
  //   try {
  //     await soundObject.loadAsync(
  //       audio,
  //     )
  //     await soundObject.playAsync()
  //     soundObject.setIsLoopingAsync(true)
  //     // Your sound is playing!
  //     alert('playing?', audio)
  //   } catch (error) {
  //     // An error occurred!
  //     alert('error', JSON.dump(error))
  //   }
  }

  render = () => {
    return (
      null
    )
  }
}

export default BackgroundAudioMobile
