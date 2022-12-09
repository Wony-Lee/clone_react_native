### reavt-natvie 생성하면서 꼴받은점

```
0.70 버전이 릴리즈되면서 ruby 2.7.5 버전을 요구함.
1. ruby의 버전을 2.7.5 로 업데이트해주자.
2. pod 가 깨진 상태였음 -> gem install cocoapods
3. react-native create 후 /ios 에서 pod install이 깨짐
4. sudo arch -x86_64 gem install ffi 설치
5. arch -x86_64 pod-repo-update
6. npx react-native init MyApp template react-native-template-typescript << 이걸로 생성시 죽어도 ts로 생성 안됨
직접 마이그레이션 해줘야함.

ios 에서 pod install 진행 정상 빌드 됨.
```
