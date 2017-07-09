# React Native Swipe Cards
If you've used Tinder (for "scientific purposes" 😂) or are familiar with the app, then you've tried they're swipe cards. I tried recreating the functionality of the cards, moreso, the gesture and animation of swiping cards left and right. I think I got pretty close by using React Native's `Animation` and `PanResponder` modules.

Instead of trying to swipe for matches, I decided to use photos from Unsplash and their easy to use API (Ps. if you don't know what Unsplash 🐳 is, go check it out! Remember to give credit to the photos, of course!)

I also decided to use Redux to store application state because who wants to pass props infinitely and all over the place?

## How to view 👀
Download Expo on your mobile device and add the following project URL:

exp://exp.host/@brianfajardo/animation-gestures

## Tips when starting out 🕺

Here are a few methods on the `Animated` module you probably want to get familiar with if you decide to add animations to your React Native app:
 1. `Animated.ValueXY({x: , y: })`
     * pass in horizontal (x) and vertical (y) values to inform the Animated module of the current position of the element you want to animate
 2. `Animated.Spring/Decay/Timing`
    * determines the way the animation changes
 3. `Animated.View/Text/Image`
    * Applies the animation to the component of matter

 For the `PanResponder` system:
 1. Initiate a new instance of PanResponder via `PanResponder.create()` in your components constructor and pass in a configuration object into `.create()`
 2. You should probably take a look at the docs for the complete list of configs you can pass into create here: https://facebook.github.io/react-native/docs/panresponder.html

 For this app the following methods were used:
 1. `onStartShouldSetPanResponder: () => true`
    * returning true, indicates that the component is responsible for the PanResponder. Ie, gestures are activated when interacting with this component.
2. `onPanResponderMove: (e, gesture) => // do something`
   * When the component is interacted with (ie. dragging the component on-screen) the gesture object contains many useful properties such as `dx/dy` which are the current coordinates of the component.
3. `onPanResponderRelease: (e, gesture) => // do something`
   * similar to above, you can access the gesture object and run callbacks to do something

## Summary
If you're still confused (you probably are), just know that the Animated and PanResponder modules are decoupled in the use of component animations. When a user presses something on the screen and drags his or her finger this is handled by the gesture system aka `PanResponder`. The way the card actually moves with the finger is handled by, you guessed it, the `Animation` system.
