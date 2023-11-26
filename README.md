# IIK3100 Phishing Site

This repository contains the code for a CTF challenge in the course IIK3100 at NTNU autumn 2023. The assignment was to create a phishing email which links to a website and collect credentials from users (the lecturer).

This phishing site was made to look like the CTFd site of hackingarena (our website for the course). It is used to collect credentials from users, in addition to IP addresses, user agents and OS.

It is connected to Supabase which is a database service. The database is used to store the credentials, and is accessed through the Supabase API. It is also connected to Discord through a webhook, which is used to send a message to a Discord channel when a user submits their credentials.

| My page                                     | Real page                                     |
| ------------------------------------------- | --------------------------------------------- |
| ![My page](https://i.imgur.com/3xTlH4a.png) | ![Real page](https://i.imgur.com/O26G4gT.png) |

The page was originally `iik3100.runarmod.no`, but is now available at [iik3100-phish.runarmod.no](https://iik3100-phish.runarmod.no) and is trying to look kind of like [iik3100.hackingarena.no](https://iik3100.hackingarena.no).

## Disclaimer

This phishing site is not intended to be used for malicious purposes. It was created as a part of a CTF challenge in the course IIK3100 at NTNU autumn 2023. The assignment was to create a phishing email which links to a website and collect credentials from users (the lecturer).

The database integration has been removed, but it is still connected to a Discord webhook, so if you visit the page, DO NOT enter any real credentials. The page is not intended to be used for malicious purposes, and I am not responsible for any damage caused by the use of this page.

After the CTF challenge was over, I have added a disclaimer on the page to make sure no one accidentally enters their real credentials.

## My email

The following is the email I sent to the lecturer, which contains the link to the phishing site.

The link is `https://iik3100.hackingarena.no/` but actually sends the victim to `https://iik3100.runarmod.no/` (now `https://iik3100-phishing-website.runarmod.no/`).

```txt
[Subject]: "Topic Exploit" CTF Challenge Submission Issue

Dear Professor Laszlo,

I hope this email finds you well. I wanted to extend my appreciation for your outstanding lectures in our "Ethical Hacking and Penetration Testing" course this year. Your expertise and passion for the subject have made this course truly fascinating.

I've successfully completed the "Topic Exploit" CTF challenge and believe I have the correct solution. However, I've encountered a persistent server error on the submission page for this specific task at "https://iik3100.hackingarena.no". This issue has been hindering my ability to submit the flag, despite my best efforts to resolve it.

Would you please take a look at the settings on our CTF page linked above? Your insights would be invaluable in addressing this challenge submission issue.

Thank you for your support, and I appreciate your understanding in resolving this issue related to the "Topic Exploit" task.

Best regards,
Runar Saur Modahl
```

## Demo

Demo showing the phishing site in action.

![Demo](https://i.imgur.com/olqdAoc.gif)

## Result

This is the message I got from the webhook when the lecturer submitted his credentials.

![Discord webhook result](https://i.imgur.com/i7zpRSx.png)
