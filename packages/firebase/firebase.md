# Firebase

- Tools for `building apps` and `manage infrastructure` on GCP
- Acquired by Good in 2014
- Features
  - `Document Database`: Firestore (json db that stays in sync with the frontend application)
  - `User authentication`
  - `Website hosting`: a Backend as a Service (BaaS)
  - `Serverless computing`: Cloud functions GCP serverless backend
  - `Messaging & notifications`: Cloud Messaging GCG
  - `Analytics`: Google Analytics
  - `Ads`: Google AdMob
  - `SDK`: for android, ios, js, c++, etc

## CLI

```shell
# firestore
firebase init firestore

# cloud function
firebase init functions

# firebase emulator (for local testing)
firebase emulators:start

# deploy code to google servers
firebase deploy
```

## Firestore Security rules

- Define access control logic to the firestore database
- Defined in a `common expression language`
- `firestore.rules`

```rules
match /accounts/{userId} {
  allow read;
  allow write: if request.auth.uid == userId;
}
```
