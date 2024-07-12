// const getAllProductsFromDB = async (query: QueryParams) => {
//     let searchTerm = '';
//     const queryObj: QueryParams = { ...query };
//     const queryObjCopy: QueryParams = { ...queryObj };

//     // Convert string to number
//     if (queryObjCopy.price) {
//         queryObjCopy.price = Number(queryObjCopy.price);
//     }

//     if (queryObjCopy.rating) {
//         queryObjCopy.rating = Number(queryObjCopy.rating);
//     }

//     const searchableFields = ['name', 'description', 'productDescription'];
//     if (query?.searchTerm) {
//         searchTerm = query?.searchTerm as string;
//     }

//     // First search using searchTerm
//     const searchQuery = Products.find({
//         $or: searchableFields.map((field) => ({
//             [field]: { $regex: searchTerm, $options: 'i' }
//         }))
//     });

//     // Exclude fields that are not used in filtering
//     const excludeFields = ['searchTerm'];
//     excludeFields.forEach((el) => {
//         delete queryObj[el];
//         delete queryObjCopy[el];
//     });

//     // Prepare filter objects
//     const filterStringTypeArray: FilterQuery<Document>[] = [];
//     const filterNumberTypeArray: FilterQuery<Document>[] = [];

//     Object.keys(queryObjCopy).forEach((key) => {
//         if (typeof queryObjCopy[key] === 'string') {
//             filterStringTypeArray.push({ [key]: { $regex: queryObjCopy[key], $options: 'i' } });
//         } else if (typeof queryObjCopy[key] === 'number' && key !== 'price') {
//             filterNumberTypeArray.push({ [key]: queryObjCopy[key] });
//         }
//     });

//     // Handle the price filter separately
//     if (queryObjCopy.price) {
//         filterNumberTypeArray.push({ price: { $lte: queryObjCopy.price } });
//     }

//     console.log('String Filters:', filterStringTypeArray);
//     console.log('Number Filters:', filterNumberTypeArray);

//     // Combine filters and execute the query
//     const combinedFilter: FilterQuery<Document> = {};

//     if (filterStringTypeArray.length || filterNumberTypeArray.length) {
//         combinedFilter.$and = [];

//         if (filterStringTypeArray.length) {
//             combinedFilter.$and.push(...filterStringTypeArray);
//         }
//         if (filterNumberTypeArray.length) {
//             combinedFilter.$and.push(...filterNumberTypeArray);
//         }
//     }

//     console.log('Combined Filter:', JSON.stringify(combinedFilter, null, 2));

//     const result = await Products.find(combinedFilter).exec(); // Changed this line to directly query Products
//     console.log('Result:', result);
//     return result;
// };

// specific function for price based filtering
// const getAllProductsByPriceRangeFromDB = async (query: Record<string, unknown>) => {
//     console.log(query);
//     const result = await Products.find({ price: { $lte: query.price } })
//     return result;
// }

// const getAllProductsFromDB = async (query: Record<string, unknown>) => {
//     //{email: {$regex: query.name, $options:i}}
//     let searchTerm = '';
//     const queryObj = { ...query };
//     const queryObjCopy = { ...queryObj }
//     console.log(queryObjCopy);
//     // converting string to number

//     if (queryObjCopy.price && queryObjCopy.price === 'string') {
//         console.log('Entered price block');
//         // queryObjCopy.price = parseInt(queryObjCopy.price, 10);
//         queryObjCopy.price = Number(queryObjCopy.price);
//     }

//     if (queryObjCopy.rating && typeof queryObjCopy.rating === 'string') {
//         console.log('Entered rating block');
//         // queryObjCopy.rating = parseInt(queryObjCopy.rating, 10);
//         queryObjCopy.rating = Number(queryObjCopy.rating);
//     }
//     // if (queryObjCopy?.price || queryObjCopy?.rating) {
//     //     if (typeof queryObjCopy.price === 'string') {
//     //         queryObjCopy.price = parseInt(queryObjCopy.price, 10);
//     //     } else if (typeof queryObjCopy.rating === 'string') {
//     //         queryObjCopy.rating = parseInt(queryObjCopy.rating, 10);
//     //     }
//     // }

//     console.log('line 22:', queryObjCopy);

//     const searchableFields: string[] = ['name', 'description', 'productDescription'];
//     if (query?.searchTerm) {
//         searchTerm = query?.searchTerm as string;
//     }
//     // method chaining
//     // first search is done by using the query object with searchTerm. This below function only returns a promise
//     const searchQuery = Products.find({
//         $or: searchableFields.map((field) => ({
//             [field]: { $regex: searchTerm, $options: 'i' }
//         }))
//     });

//     // filtering starts from here
//     const excludeFields = ['searchTerm'];

//     excludeFields.forEach((el) => {
//         delete queryObj[el];
//         delete queryObjCopy[el];
//     })

//     // console.log(query, queryObj);
//     // at the second stage searchTerm is deleted once its work is done at the first stage. then the second query method gets executed with the remaining query field
//     // const result = await searchQuery.find(queryObj);
//     console.log('After excluding searchTerm:', queryObjCopy);
//     const filterKeys = Object.keys(queryObjCopy);
//     const filterStringTypeArray: Record<string, string>[] = [];
//     const filterNumberTypeArray: Record<string, number>[] = [];

//     console.log('Filter keys from queryObjCopy:', filterKeys);

//     filterKeys.forEach((key) => {
//         console.log('Line 52:', typeof queryObjCopy[key]);
//         if (typeof queryObjCopy[key] === 'string') {
//             filterStringTypeArray.push({ [key]: queryObjCopy[key] })
//         } else if (typeof queryObjCopy[key] === 'number' && key !== 'price') {
//             filterNumberTypeArray.push({ [key]: queryObjCopy[key] })
//         }
//     })

//     console.log('String type value array:', filterStringTypeArray);
//     console.log('Number type value array:', filterNumberTypeArray);
//     // let filterStringTypeObj:Record<string, string>[] = [];
//     const { '0': filterStringTypeObj }: Record<string, string>[] = { ...filterStringTypeArray }
//     const { '0': filterNumberTypeObj }: Record<string, number>[] = { ...filterNumberTypeArray }
//     console.log('String value type query object:', filterStringTypeObj);
//     console.log('Number value type query object:', filterNumberTypeObj);

//     //^use this variable to run a loop
//     const filterStringKeys = Object.keys(filterStringTypeObj);

//     console.log('Filtered string keys array:', filterStringKeys)

//     //^use this variable to run a loop
//     const filterNumberKeys = Object.keys(filterNumberTypeObj);
//     console.log('line 70:', filterNumberKeys)

//     filterStringKeys.forEach((key) => console.log("Line 76:", queryObj[key]));
//     filterNumberKeys.forEach((key) => console.log("Line 77:", queryObj[key]));

//     // ডিরেক্ট queryObj ব্যবহার করে ফিল্টার করলে এক্সাক্ট স্ট্রীং ম্যাচ না করলে রেজাল্ট আসে না। তাই কেস সেন্সিটিভিটী রিমুভ করার জন্য এটাকে $regex দিয়ে মডিফাই করে নিলাম। এখানে map একটা এরে রিটার্ন করে। আর $in, $and, $or অপারেটর গুলোর জন্য array দরকার


//     if (filterNumberTypeArray.length === 0) {
//         console.log('entered string search query block');
//         const result = await searchQuery.find({
//             $and: filterStringKeys.map((key) => ({
//                 [key]: { $regex: queryObj[key], $options: 'i' }
//             }))
//         })
//         return result
//     } else { //নিচের কোডে প্রমিজ ক্রিয়েট হচ্ছে। এখানে string ভ্যালু দিয়ে ফিল্টার হচ্ছে
//         const performFilteringWithString = searchQuery.find({
//             $and: filterStringKeys.map((key) => ({
//                 [key]: { $regex: queryObj[key], $options: 'i' }
//             }))
//         })

//         // এখানে যেকোন number ভ্যালু দিয়ে ফিল্টারিং প্রমিজ ক্রিয়েট হচ্ছে। কিন্তু প্রাইস ইনক্লুডেড না।
//         if (queryObj.price) {
//             const performFilteringWithNumber = performFilteringWithString.find({
//                 $and: filterNumberKeys.map((key) => ({
//                     [key]: queryObj[key]
//                 }))
//             });

//             const performFilterForAPriceLimit = performFilteringWithNumber.find({ price: { $lte: queryObj['price'] } })

//             // ফাইনালি এখানে প্রমিজ রিসল্ভ হচ্ছে
//             const result = await performFilterForAPriceLimit;
//             return result;
//         } else {
//             const result = await performFilteringWithString.find({
//                 $and: filterNumberKeys.map((key) => ({
//                     [key]: queryObj[key]
//                 }))
//             });
//             return result
//         }
//     }
//     // //নিচের কোডে প্রমিজ ক্রিয়েট হচ্ছে। এখানে string ভ্যালু দিয়ে ফিল্টার হচ্ছে
//     // const performFilteringWithString = searchQuery.find({
//     //     $and: filterStringKeys.map((key) => ({
//     //         [key]: { $regex: queryObj[key], $options: 'i' }
//     //     }))
//     // })

//     // // এখানে যেকোন number ভ্যালু দিয়ে ফিল্টারিং প্রমিজ ক্রিয়েট হচ্ছে। কিন্তু প্রাইস ইনক্লুডেড না।
//     // if (queryObj?.price) {
//     //     const performFilteringWithNumber = performFilteringWithString.find({
//     //         $and: filterNumberKeys.map((key) => ({
//     //             [key]: queryObj[key]
//     //         }))
//     //     });

//     //     const performFilterForAPriceLimit = performFilteringWithNumber.find({ price: { $lte: queryObj['price'] } })

//     //     // ফাইনালি এখানে প্রমিজ রিসল্ভ হচ্ছে
//     //     const result = await performFilterForAPriceLimit;
//     //     return result;
//     // } else {
//     //     const result = await performFilteringWithString.find({
//     //         $and: filterNumberKeys.map((key) => ({
//     //             [key]: queryObj[key]
//     //         }))
//     //     });
//     //     return result
//     // }

// }

// const getAllProductsByPriceRange = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const result = await ProductServices.getAllProductsByPriceRangeFromDB(req.query);
//         sendResponse(result, res, 'Products fetched successfully');
//     } catch (error) {
//         next(error);
//     }
// }
// router.get('/products/price', ProductControllers.getAllProductsByPriceRange);
// interface QueryParams {
//     searchTerm?: string;
//     brand?: string;
//     rating?: string | number;
//     price?: string | number;
//     category?: string;
//     [key: string]: unknown;
// }