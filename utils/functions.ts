import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_API_KEY }).base(`${process.env.NEXT_PUBLIC_BASE_KEY}`);

export const fetchRecords = async (tableName: string) => {
    try {
        const records = await base(tableName)
            .select({
                fields: ['Name', 'Images', 'CSSProperty', 'Status'],
                sort: [{ field: 'Status', direction: 'asc' }]
            })
            .firstPage();
        const rawJsonArray = records?.map(record => record._rawJson.fields);
        return rawJsonArray ? rawJsonArray : null;
    } catch (error) {
        // For Testing Purpose
        console.error(error);
        //////////////////////
        return null;
    }
};

  // const fetchSkills = () => {
  //   base('Skills')
  //     .select({
  //       fields: ['Name', 'Images', 'CSS Property', 'Status'],
  //       // Add any filter options here
  //     })
  //     .eachPage((records, fetchNextPage) => {
  //       // Process each page of records here
  //       // records.forEach(record => {
  //       //   // Do something with each record
  //       //   const name = record.get('Name');
  //       //   const age = record.get('Images');
  //       //   const email = record.get('CSS Property');
  //       //   console.log(name, age, email);
  //       // });
  //       console.log(records)
  //       // Fetch the next page of records
  //       fetchNextPage();
  //     });
  // }