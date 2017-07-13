export default function generateUsersList(num) {
    const data = {
        people: {
            male: {
                names: ['Ivan', 'Nikolay', 'Semen', 'Vladimir', 'Aleksey', 'Bill', 'John', 'Bob', 'Jimm', 'Roy'],
                surnames: ['Ivanov', 'Smirnov', 'Popov', 'Kozlov', 'Lebedev', 'Abramson', 'Barnes', 'Brown', 'Carey', 'Holmes']
            },
            female: {
                names: ['Anna', 'Marina', 'Olga', 'Svetlana', 'Alena', 'Barbara', 'Agata', 'Juliet', 'Irene', 'Candy'],
                surnames: ['Ivanova', 'Smirnova', 'Popova', 'Kozlova', 'Lebedeva', 'Abramson', 'Barnes', 'Brown', 'Carey', 'Holmes']
            },
        },
        company: {
            departments: ['Accounts department', 'Production department', 'Purchasing department', 'Sales department', 'Board of directors']
        }
    };

    let user,
        result = [];

    const generateUser = () => {
        let rand = Math.floor(Math.random() * 2),
            sex = rand ? 'male' : 'female',
            names = data.people[sex].names,
            surnames = data.people[sex].surnames,
            departments = data.company.departments;

        return {
            name: names[Math.floor(Math.random() * names.length)],
            surname: surnames[Math.floor(Math.random() * surnames.length)],
            department: departments[Math.floor(Math.random() * departments.length)]
        };
    };

    for (let i = 0; i < num; i++) {
        user = generateUser();
        result.push(user);
    }

    return result
}


