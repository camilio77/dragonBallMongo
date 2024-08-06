import express from 'express';
import { Personajes } from './personajes.js';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const obj = new Personajes();

console.log(await obj.getAlienAll())
