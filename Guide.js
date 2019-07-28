import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
import AppIntro from './src/intro';

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 15,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

class Guide extends Component {

    render() {
        return (
            <AppIntro>
                <View style={[styles.slide, {backgroundColor: '#fa931d'}]}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: w,
                        height: h,
                    }} level={20}
                    >
                        <Image style={{width: w, height: h}} source={require('./src/assets/pic_2.jpg')}/>
                    </View>
                    <View level={8}><Text style={styles.text}>我是一只小鸭子</Text></View>
                </View>
                <View style={[styles.slide, {backgroundColor: '#fa931d'}]}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: w,
                        height: h,
                    }} level={20}
                    >
                        <Image style={{width: w, height: h}} source={require('./src/assets/pic_3.jpg')}/>
                    </View>
                    <View level={8}><Text style={styles.text}>哎呀哎呀勤劳</Text></View>
                </View>
                <View style={[styles.slide, {backgroundColor: '#fa931d'}]}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: w,
                        height: h,
                    }} level={20}
                    >
                        <Image style={{width: w, height: h}} source={require('./src/assets/pic_4.jpg')}/>
                    </View>
                    <View level={8}><Text style={styles.text}>我是一只小蜜蜂</Text></View>
                </View>

                <View style={[styles.slide, {backgroundColor: '#fa931d'}]}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: w,
                        height: h,
                    }} level={28}
                    >
                        <Image style={{width: w, height: h}} source={require('./src/assets/pic_5.jpg')}/>
                    </View>
                    <View level={8}><Text style={styles.text}>我是一只小牛</Text></View>
                </View>

            </AppIntro>
        );
    }
}

export default Guide