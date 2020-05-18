---
title: 'Some things I learned during my first developer job'
excerpt: "A list of technical and non-technical things I took away from my first developer job."
coverImage: '/assets/blog/some-things-i-learned-during-my-first-developer-job/cover.jpg'
date: '2020-05-17T05:35:07.322Z'
author:
  name: Caleb Lawrences
ogImage:
  url: '/assets/blog/some-things-i-learned-during-my-first-developer-job/cover.jpg'
---

I started my first full-time developer a job year ago at muv, a small company in the corporate transportation space located Addison, Texas. It was a great experience and I thought I'd talk about a few things I learned. Most of them are technical but some are not.

### Making changes to a legacy system can be really hard

At muv I was dealing with a legacy codebase that was written by a lot of people overseas and often times was it was a complete mess. It was written in php and you would see things like this everywhere:

```php
// form submission data
$input = Input::all();

$something = functionThatDoesSomething($input);

function functionThatDoesSomething($input) {
		...
}
```

This is problematic because we have no idea what this generic object `$input` is and we have to go look at the raw HTML to figure out what form values will be submitted. This is hard because if you need to make a change to `functionThatDoesSomething` you will have to spend a lot of effort trying to figure out what data is passed into it. This is just a small example of an anti-pattern that makes code hard to change.

Some things that I learned while spending time in a poorly written legacy codebase:

* Write tests - they will make future code change easier.
* Never pass generic objects into a function - especially in dynamic languages like php.
* Write clean code: use good naming, abstract things for clarity, etc.
* Don't repeat code. Repeated code makes making future changes hard.
* Dead code is bad. If a business removes a process then the code should follow with it. Having code lying around for no good reason makes future maintainability hard.

### Using Vanilla Javascript for writing UI heavy webpages is not fun

I know people love to say you don't need a front-end framework for most webpages but I am not sold. We didn't have any front-end frameworks when I started at the company so I had to use jQuery for a couple of pages. It was not fun at all. Not only that but it felt like I was wasting time learning how to create user interfaces in jQuery. Thankfully we ended up bringing React into the application later on and it was awesome. Not only does using something like React make creating user interfaces easier, but it allows you to use the whole NPM ecosystem which allows you to easily pull in open source libraries to help you write less code.

### Don't get too hung up on the tech stack

This might be contradictory given the previous paragraph but I think I can explain. When I first was asked to take this job I found out the application was an old Laravel app (php MVC framework). I had never used php but I had always heard of it in terms of that old programming language that no new software is written in (which is not true). I really had to get over this. I knew that most things I learned here would carry over any other tech stacks in the future.

I think this is true most of the time. Laravel was actually quite a lot of fun and the skill of writing backend code that is performant, easy to change, easy to reason about, etc. does carry over to any framework or programming language.

That being said you have to be careful using business-specific tools or practices. Like if muv required me to learn some super specific library that I'd have to spend a lot of time in and I didn't think the skills would carry over to other jobs in the future then that would be a problem.

### Not having a build process is a problem

I'm glad to say I didn't bring down our web application in my time at the company but I definitely made mistakes and brought down small parts of the app. I'll tell you how one of those events occurred. Every time we needed to deploy another release we would create a release on Github and directly SSH into the server (yep) and do something like this: 

```bash
git checkout <tag>
composer du # laravel/php thing
php artisan migrate
```

This was pretty bad because if you forgot to run one of the commands after the "checkout" you would be getting some error logs fast. Anyway one time I went to checkout the release and saw that it wouldn't let me because we had made some local changes on the server (yep, I know that's bad). I was still getting my practice in with various git commands back the day so instead of running `git checkout .` which would overwrite local changes I ran `git checkout master .` (I would run that locally when developing it had the desired effect) but because the server was always using a tagged release the master branch of the server was on a way older version of the code so a lot of things broke for a good 10 minutes. Anyway, having a build process (CI/CD) or whatever you want to call it is really important because it prevents stupid mistakes like that encourages you to release often and releases the mental stress of having to remember the right things when doing a release.

### Don't be loyal to companies - be loyal to people

When talking to my boss, whom I respected I lot (he was the reason I took this job), about his thoughts on when and how he leaves one company to go to another one he always told me to not be loyal to companies but be loyal to people. It makes sense. A company doesn't care about you but you will probably interact with the people you work with again in the future. You might want to come back to the company your leaving or your coworker might work at a company you want to join in the future. So don't burn bridges with people but don't be loyal to a company just because you feel like you owe them something - you don't! This is probably obvious to a lot of people but it was challenging for me.

### When working with a production app logging can be super helpful when trying to understand the system - so make it easy to log things

I didn't really have an appreciation for logging until my first job. When you develope a new feature it's so helpful to add logging in so that you can see when and how the feature is being used. 

Also, when you're asked to make a change to part of the system that you're unsure about just log that data that goes through it and it will help you understand it a lot better. 

We used Elasticsearch (through AWS) and Kibana which was a super cool tool.

These are a few things that I can think of. I also learned a lot more about MVC frameworks, how to write  more complex SQL queries, how to write better React code, setting up a custom webpack config to integrate into an existing MPA, how to decrease bundle sizes on a React app, and so on.

Looking forward to learning more in the future. :)