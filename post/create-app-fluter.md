---
title: "Create a Notes App with Flutter"
description: "Create a color-rich Note-taking app with Flutter."
imgName: "/images/note-app-in-flutter.jpg"
date: "Jun 15, 2021"
tags: ["flutter"]
keywords:
  ["flutter", "dart", "android", "note-app", "note-taking", "sqflite", "sqlite"]
---

![Create a Notes App with flutter](/images/note-app-in-flutter.jpg)

# Create a Note-taking App in Flutter

Flutter is a declarative framework that requires programming in Dart. Flutter is suitable for creating simple apps like Note-taking, Event-registration, etc.

> Pre-requisites: Knowledge of basic Dart and Flutter. Read about [Flutter](https://flutter.dev/docs) and [Dart](https://dart.dev/guides).

With basic concepts like Widgets and Material design we can create simple apps very fast and easily in Flutter as in Flutter we can use tons of pre-designed widgets to create almost every popular design using in the modern design world.

In this tutorial, we discuss creating a simple note-taking app. The note-taking app we are going to create provides options like create, save, update and delete notes.

Our note-taking app contains two screens

- Home screen to display all saved notes
- Notes edit screen to create new notes or edit saved notes

## Create Flutter App

Before creating a Flutter app please make sure you have installed flutter-sdk and dart-sdk. If not follow the instructions to [install flutter](https://flutter.dev/docs/get-started/install).

Create a raw flutter app from the terminal. Run the following command and pass any name (to join more than single sting use only underscore)

```bash
flutter create notes_app
```

Go to root directory of **notes_app** and locate **main.dart** in **lib** folder. This is where our app starts execution by calling the main() function. You can find some code here which displays the welcome screen.

Now to see the app in an emulator or on a physical device run the below command.

```bash
cd notes_app/
flutter run
```

For the initial run, it takes some time to install the app on the device, and later builds will be fast. If you encounter any error run _flutter doctor -v_ for additional information and make sure all necessary items are checked.

---

## What a Note should like and contain?

A simple note must have a title and the content which can be edited as many times as possible. We can also add color to note for look and feel.

To store notes we use [Sqflite](https://pub.dev/packages/sqflite) (a plugin to mimic SQL database in Flutter). Each note can be stored as a single row in the database with fields id, title, content, color.
