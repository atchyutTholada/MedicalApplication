import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native'; // Added TouchableOpacity
import {COLORS} from '../../../src/constants/colors';
import {Iconsvg, Xml} from '../../assets/svgicon';

const HomeScreen = ({navigation}: {navigation: any}) => { // Added navigation prop
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          right: 100, // Removed bottom property
          bottom: 130, // Added bottom property
        }}>
        <Iconsvg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xml={Xml.InterNet.notification}
          style={{marginHorizontal: 1}}
        />
        <Iconsvg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xml={Xml.Settings}
          style={{marginHorizontal: 1}}
        />
        <Iconsvg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xml={Xml.Search}
          style={{marginHorizontal: 1}}
        />
      </View>
      <View>
        <Image
          source={require('../../../src/assets/images/profileImage.png')}
          style={{
            width: 170,
            height: 100,
            borderRadius: 30,
            resizeMode: 'contain',
            left: 60, // Removed bottom property
            bottom: 190,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          bottom: 180,
        }}>
        <Text
          style={{
            color: COLORS.blue,
            fontWeight: 'bold',
            fontFamily: 'LeagueSpartan-Bold',
            right: -15,
          }}>
          Categories
        </Text>
        <Text
          style={{
            color: COLORS.blue,
            textDecorationLine: 'underline',
            right: 18,
          }}>
          See all
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          height: 1,
          backgroundColor: COLORS.gray,
          marginBottom: 20,
          opacity: 0.2, // Removed bottom property
          bottom: 170,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '90%',
          bottom: 170,
        }}>
        <View style={{alignItems: 'center'}}>
          <Iconsvg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xml={Xml.Favorite}
          />
          <Text style={{fontSize: 10, color: COLORS.blue}}>Favorite</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Iconsvg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xml={Xml.Doctors}
          />
          <Text style={{fontSize: 10, color: COLORS.blue}}>Doctors</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Iconsvg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xml={Xml.Pharmacy}
          />
          <Text style={{fontSize: 10, color: COLORS.blue}}>Pharmacy</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Iconsvg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xml={Xml.Specialties}
          />
          <Text style={{fontSize: 10, color: COLORS.blue}}>Specialties</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Iconsvg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xml={Xml.Record}
          />
          <Text style={{fontSize: 10, color: COLORS.blue}}>Record</Text>
        </View>
      </View>
      <View style={{width: '100%', alignItems: 'center', bottom: 140}}>
        <Image
          source={require('../../../src/assets/images/Atchyut.png')}
          style={{
            width: 470, // Adjusted to fit the screen width
            height: undefined, // Allow height to adjust proportionally
            aspectRatio: 16 / 9, // Maintain aspect ratio
            resizeMode: 'contain', // Ensure the image is fully visible
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          bottom: 130, // Adjusted position
        }}>
        <Text
          style={{
            color: COLORS.blue,
            fontWeight: 'bold',
            fontFamily: 'LeagueSpartan-Bold',
            right: -15,
          }}>
          Specialties
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SpecialitiesScreen')}>
          <Text
            style={{
              color: COLORS.blue,
              textDecorationLine: 'underline',
              right: 18,
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      {/* Separator Line */}
      <View
        style={{
          width: '90%',
          height: 1,
          backgroundColor: COLORS.gray,
          marginBottom: 20,
          opacity: 0.2,
          bottom: 120, // Adjusted position
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '90%',
          marginBottom: 20,
          bottom: 120,
        }}>
        <Iconsvg
          width="72" // Increased size
          height="72" // Increased size
          fill="none"
          xml={Xml.Cardiology}
        />
        <Iconsvg
          width="72" // Increased size
          height="72" // Increased size
          fill="none"
          xml={Xml.Dermatology}
        />
        <Iconsvg
          width="72" // Increased size
          height="72" // Increased size
          fill="none"
          xml={Xml.GeneralMedicine}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '90%',
          bottom: 110,
        }}>
        <Iconsvg
          width="72" // Increased size
          height="72" // Increased size
          fill="none"
          xml={Xml.Gynecology}
        />
        <Iconsvg
          width="72" // Increased size
          height="72" // Increased size
          fill="none"
          xml={Xml.Odontology}
        />
        <Iconsvg
          width="72" // Increased size
          height="72" // Increased size
          fill="none"
          xml={Xml.Oncology}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingTop: 220, // Increased paddingTop to move content down
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    color: COLORS.black,
  },
});

export default HomeScreen;
