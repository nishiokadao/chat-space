# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

**DB設計**

|Column|Type|Options|
|------|----|-------|
|neme|string|index:ture,null: false, unique: true|
|mail|string|null: false,|

 Association
- has_many:grop,through:members
- has_many:messages
- has_many:members
