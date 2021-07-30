const Dongho = {
    name: "SEO DONG HO",
    age : 35,
    gender : "Male"
}

const resolvers = {
    Query : {
        person : () => Dongho
    }
};

export default resolvers;