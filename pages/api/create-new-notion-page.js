import * as yup from 'yup';
const { Client } = require('@notionhq/client');

let requestSchema = yup.object().shape({
  title: yup.string().required()
});

export default async (req, res) => {
  if (typeof req.body !== 'object') {
    return res
      .status(400)
      .json({ error: true, errors: ['request body is required'] });
  }

  try {
    await requestSchema.validate(req.body);
  } catch (err) {
    return res.status(400).json({ error: true, errors: err.errors });
  }
  let { title } = req.body;

  const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

  (async () => {
    const response = await notion.pages.create({
      parent: {
        database_id: 'd4794994-b165-43a7-9656-3f62874f3f1b'
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: title
              }
            }
          ]
        }
      },
      children: [
        {
          object: 'block',
          type: 'heading_2',
          heading_2: {
            text: [
              {
                type: 'text',
                text: {
                  content: 'Lacinato kale'
                }
              }
            ]
          }
        },
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            text: [
              {
                type: 'text',
                text: {
                  content:
                    'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
                  link: {
                    url: 'https://en.wikipedia.org/wiki/Lacinato_kale'
                  }
                }
              }
            ]
          }
        }
      ]
    });
    console.log(response);
  })();

  res.status(200).json({ succes: true });
};
