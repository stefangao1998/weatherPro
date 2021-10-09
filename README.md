## Packages: 
- [DvaJS](https://dvajs.com/)
- [@ant-design/react-native](https://rn.mobile.ant.design/index-cn)
- [react-navigation](https://reactnavigation.org/)

**Setting up the development environment (https://reactnative.dev/docs/environment-setup)**

## Start

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
