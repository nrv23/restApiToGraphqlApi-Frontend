import gql from 'graphql-tag';
const FRAGMENT_DRIVER = gql`
    fragment DriverInfo on Driver {
        id
        url
        urlMobile
        name
        dateOfBirth
        nationality
        code
        permanentNumber
    }
`;

export const DRIVER_YEAR = gql`
    query getDriversYear($year: String!) {
        driversYear (year: $year) {
            ...DriverInfo
        }
    }
    ${FRAGMENT_DRIVER}
`;
