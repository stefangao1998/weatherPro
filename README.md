# Weather Pro
![IMG_3572](https://user-images.githubusercontent.com/41606812/136698484-afa2bcc7-c8b8-42d2-99d4-d374462cf437.PNG)
![IMG_3573](https://user-images.githubusercontent.com/41606812/136698487-3ce98f42-8d58-4e93-845c-129277e8ddce.PNG)
![IMG_3574](https://user-images.githubusercontent.com/41606812/136698490-e5cf53ed-7cdf-4957-896a-2cca08ad66fd.PNG)

## Download App store version

Download Link: https://apps.apple.com/au/app/weatherpro/id1589661415


## Run via TestFlight

Download Link: https://testflight.apple.com/join/835tbuix


## Run via terminal

github clone to local repository，use yarn download the dependencies：

```npm
yarn
```

Link the `@ant-design/react-native` font file (optional)：

```npm
yarn react-native link
```

for **iOS** download pod dependencies（Android skip）：

```shell
cd ios && pod install && cd -
```

start watch，listen for file changes：

```npm
yarn watch
```

another terminal，run Android app：

```npm
yarn android
```

or，run iOS app：

```npm
yarn ios
```

## Packages: 
- [DvaJS](https://dvajs.com/)
- [@ant-design/react-native](https://rn.mobile.ant.design/index-cn)
- [react-navigation](https://reactnavigation.org/)

**Setting up the development environment (https://reactnative.dev/docs/environment-setup)**
