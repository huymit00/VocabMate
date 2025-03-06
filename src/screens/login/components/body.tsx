import {img1, img2, img3} from '@images';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

type BodyProps = {index: number};

export const Body = ({index}: BodyProps) => {
  if (index === 1) {
    return (
      <View style={{flex: 1}}>
        <View style={styles.textView}>
          <Text style={styles.headerText}>Learn from the best</Text>
          <Text style={styles.bodyText}>
            Online classes are taught by the world’s best experts in each
            industry.
          </Text>
        </View>

        <View style={styles.imageView}>
          <Image source={img1} style={styles.image} resizeMode="stretch" />
        </View>
      </View>
    );
  }

  if (index === 2) {
    return (
      <View style={{flex: 1}}>
        <View style={styles.imageView}>
          <Image source={img2} style={styles.image} resizeMode="stretch" />
        </View>
        <View style={styles.textView}>
          <Text style={styles.headerText}>Maximize your potential</Text>
          <Text style={styles.bodyText}>
            Achieve your learning goals in half the time with our features.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.textView}>
        <Text style={styles.headerText}>Explore a range of topics</Text>
        <Text style={styles.bodyText}>
          Access to 210+ courses and short videos to expand your knowledge.
        </Text>
      </View>

      <View style={styles.imageView}>
        <Image source={img3} style={styles.image} resizeMode="stretch" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    rowGap: 4,
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 20,
  },
  imageView: {
    flex: 1,

    marginVertical: 16,
    marginHorizontal: 20,
    // backgroundColor: 'red',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#646AFF',
    overflow: 'hidden',
  },
  image: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
});
