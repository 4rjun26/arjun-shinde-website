import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import {useRouter} from 'next/router';

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    // const router = useRouter();
    // var name=router.query.name;
    options.uploadDir = path.join(process.cwd(), "/public/pfpimage");
    options.filename = (name, ext, path, form) => {
      return "_"+path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/pfpimage"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/pfpimage"));
  }
  await readFile(req, true);
  res.json({ done: "ok" });
};

export default handler;