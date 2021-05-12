interface ICourses {
   _id: string
   title: string,
   image: string,
   instructor: string,
   topic: string,
   level: string,
   price: number,
   hours: number,
   students: number,
   category: string,
   devCategory: string,
   created_at: Date,
   updated_at: Date
   date: string
}

export {ICourses}
