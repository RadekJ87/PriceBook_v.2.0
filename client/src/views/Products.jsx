import React from 'react';
import WallpaperDiv from '../components/WallpaperDiv';
import test from '../images/backgroundLogin.avif';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CustomizableTableHead from "../components/CustomizableTableHead";
import {faker} from "@faker-js/faker";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {OutlinedInput} from "@mui/material";

const columns = [
    {id: 'description', label: 'Opis', minWidth: 170, align: 'center'},
    {id: 'drawing', label: 'Numer\u00a0rysunku', minWidth: 80, align: 'center'},
    {id: 'rev', label: 'Rewizja', minWidth: 40, align: 'center'},
    {id: 'material', label: 'Numer\u00a0materiału\u00a0klienta', minWidth: 150, align: 'center'},
    {id: 'moq', label: 'MOQ', minWidth: 40, align: 'center'},
    {id: 'price', label: 'Cena', minWidth: 40, align: 'right', format: (value) => value.toLocaleString('pl')},
];

const createRandomProduct = () => {
    return {
        productID: faker.datatype.uuid(),
        description: faker.commerce.product(),
        drawing: faker.datatype.number({min: 100000, max: 99999999, precision: 1}),
        rev: faker.datatype.number({min: 0, max: 99, precision: 1}),
        material: faker.datatype.number({min: 100000, max: 9999999999, precision: 1}),
        moq: faker.datatype.number({min: 1, max: 1000, precision: 1}),
        price: faker.finance.amount(0.01, 1000, 2, '€'),
    };
}

export const products = [];

Array.from({length: 50}).forEach(() => {
    products.push(createRandomProduct());
});


const Products = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <WallpaperDiv image={test}>
            <Box sx={{
                width: "1600px",
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                // backgroundColor: "#FFF7AA"
            }}>
                <Box className="search" sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 1,
                    minWidth: "40%",
                    height: "40px",
                    marginBottom: "25px",
                    justifyContent: "center",
                    backgroundColor: "#fafafa",
                    border: "1px solid #cccccc",
                    boxShadow: "0px 5px 10px 0px rgba(255,255,255,0.7)",
                    transition: "all ease 0.2s",
                    borderRadius: "5px",
                    '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: '0px 10px 20px 2px rgba(255,255,255,0.7)'
                    }
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{
                                mr: 2,
                                flex: 1,
                                fontFamily: 'Oswald',
                                fontSize: {xs: "16px", md: "24px"},
                                textTransform: "uppercase",
                            }}>Wyszukaj produkt</Typography>
                    </Box>
                    <OutlinedInput sx={{flex: 2}} placeholder="Podaj numer rysunku"/>
                </Box>
                <Paper sx={{width: '100%', overflow: 'hidden'}}>
                    <TableContainer sx={{maxHeight: 640}}>
                        <Table stickyHeader aria-label="sticky table">
                            <CustomizableTableHead columns={columns}/>
                            <TableBody>
                                {products
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={()=> console.log(`Klinknięto product ${row.description} o ID ${row.productID} `)}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        labelRowsPerPage='Produktów na stronę:'
                        component="div"
                        count={products.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        labelDisplayedRows={(from = page) => (`${from.from}-${from.to === -1 ? from.count : from.to} z ${from.count}`)}
                    />
                </Paper>
            </Box>
        </WallpaperDiv>
    );
};

export default Products;

