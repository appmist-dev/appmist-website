# TIMEUP_LOCK.md

# TimeUp Lock

Product Specification

Version: 1.0

---

# Product Overview

TimeUp Lock is a lightweight Android application designed to make phone handoffs simple and stress-free.

Parents can set a timer before giving their phone to a child or another person.

When the timer expires, the phone automatically locks and can only be unlocked using the parent's PIN or device authentication.

The goal is to reduce screen-time arguments while giving parents confidence when sharing their phones.

---

# Product Vision

Provide the simplest possible phone handoff experience.

No complicated parental controls.

No unnecessary settings.

Just:

Set a timer.

Hand over the phone.

Automatic lock.

Done.

---

# Target Audience

Primary

* Parents
* Families
* Guardians

Secondary

* Teachers
* Friends sharing devices
* Anyone temporarily lending their phone

---

# Core Problem

Parents often hand their phone to a child "for five minutes."

Children usually continue using the phone after the agreed time.

Parents must repeatedly ask for the phone back.

This creates unnecessary frustration and arguments.

TimeUp Lock solves this by enforcing the agreed time automatically.

---

# Solution

The parent selects a timer before handing over the phone.

The app runs in the background.

When the timer expires:

* The screen locks automatically.
* Only the parent can unlock the phone.
* No reminders or arguments are needed.

---

# Key Features

## Timer

Quick presets

* 5 minutes
* 10 minutes
* 15 minutes
* 20 minutes
* 30 minutes

Custom duration support.

---

## Automatic Lock

When the timer expires:

* Lock the screen automatically.
* Prevent further use until unlocked.

---

## Parent PIN

The parent authenticates using the device PIN, pattern, password, or biometric authentication.

Children cannot bypass the lock through the app.

---

## Background Operation

The timer continues running while:

* Other apps are open.
* The screen is turned off.
* The phone is idle.

---

## Lightweight

Small APK size.

Fast startup.

Low battery usage.

Minimal memory consumption.

---

## Privacy First

TimeUp Lock does NOT:

* Create user accounts.
* Require login.
* Store personal information.
* Upload user data.
* Display advertisements.
* Track user activity.
* Sell personal data.

---

# Permissions

## Accessibility Service

Purpose:

Used only to automatically lock the screen when the timer expires.

The accessibility service is **never used** to:

* Read personal information.
* Collect passwords.
* Monitor typing.
* Record screen content.
* Capture user interactions for analytics.

---

## Notification Permission

Used only to:

* Show timer status.
* Notify when the timer is running.
* Inform the parent when time expires.

---

## Foreground Service

Used to keep the timer active and reliable while the app runs in the background.

---

# User Flow

1. Open TimeUp Lock.
2. Select a timer duration.
3. Tap Start.
4. Hand the phone to the child.
5. Timer runs in the background.
6. Time expires.
7. Screen locks automatically.
8. Parent unlocks the device using the normal device authentication.

---

# Benefits

* Reduces screen-time arguments.
* Encourages healthy device habits.
* Gives parents confidence when sharing their phone.
* Lightweight and easy to use.
* No complicated setup.

---

# Play Store Short Description

Set a timer before handing over your phone. Automatically locks when time is up.

---

# Play Store Full Description

TimeUp Lock is a simple parental control and phone handoff app.

Choose a timer before giving your phone to a child or another person.

When the selected time expires, the phone locks automatically and requires the parent to unlock it.

Designed to reduce screen-time arguments with a fast, stress-free experience.

Features:

* Quick timer presets
* Custom timer duration
* Automatic screen lock
* Background timer
* Lightweight
* Privacy-first
* No account required

---

# Frequently Asked Questions

## Does the app collect personal data?

No.

TimeUp Lock does not collect personal information.

---

## Does the app require an account?

No.

---

## Why does the app use Accessibility Service?

Only to lock the screen automatically when the timer expires.

It is not used for monitoring, recording, analytics, or data collection.

---

## Does the timer continue when another app is open?

Yes.

---

## Can children bypass the timer?

The app is designed to make casual bypassing difficult by locking the screen automatically. Security ultimately depends on the device's built-in authentication.

---

# Privacy Summary

TimeUp Lock is designed with privacy as a core principle.

* No user accounts
* No cloud storage
* No analytics
* No advertising
* No third-party tracking
* No personal data collection

---

# Support

Website

https://appmist.in

Support Email

[appmist.in@gmail.com](mailto:appmist.in@gmail.com)

---

# Future Roadmap

Potential future enhancements:

* Custom PIN within the app
* Daily usage schedules
* Usage history
* Multiple timer profiles
* Wear OS support
* Tablet optimization

These features are planned ideas and may change.

---

# AI Instructions

When generating documentation, website content, screenshots, FAQs, or marketing material:

* Use this file as the source of truth.
* Never describe features that do not exist.
* Keep language simple and parent-friendly.
* Emphasize privacy, simplicity, and reliability.
* Avoid exaggerated marketing claims.
* Keep messaging consistent across the website, Play Store, and support pages.

End of Document.
