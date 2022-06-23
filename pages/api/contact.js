// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import express from "express";
import { text } from "express";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const oauth2 = google.auth.OAuth2;

  const { name, email, message } = JSON.parse(req.body);

  const oauth2Client = new oauth2(
    process.env.OAUTH_CLIENTID,
    process.env.OAUTH_CLIENTSECRET,
    "https://developers.google.com/oasuthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESHTOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("failed to create access token");
        res.status(500);
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      accessToken,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENTSECRET,
      refresh_token: process.env.OAUTH_REFRESHTOKEN,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "thomasgusewelle21@gmail.com",
      subject: `Portfolio Contact Form Submission from ${name}`,
      html: `<p><strong>Name: </strong>${name}</p><br/>
      <p><strong>Email: </strong>${email}</p><br/>
      <p><strong>Message: </strong>${message}</p>`,
    });
  } catch (error) {
    if (error) {
      res.status(500);
    }
  }

  res.status(200).json(req.body);
};
