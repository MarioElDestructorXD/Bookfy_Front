import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, AppBar, Toolbar } from '@mui/material';

const books = [
    {
        title: 'Corazón de tinta',
        category: 'Magia',
        description: 'Este es un libro que la chiif queria o quiere.',
        image: 'https://static.wikia.nocookie.net/doblaje/images/1/1b/Corazon_de_tinta.jpg/revision/latest?cb=20121202192127&path-prefix=es' // URL de la imagen del libro
    },
];

const MiBiblioteca = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        navbar
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid style={{ padding: '20px', marginTop: '20px' }}>
                    {books.map((book, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ maxWidth: 250 }}> {/* Ancho de la card */}
                                <CardMedia
                                    component="img"
                                    height="180" // altura de la imagen
                                    image={book.image}
                                    alt={book.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {book.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {book.category}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {book.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" variant="contained" color="success">
                                        Leer
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default MiBiblioteca;
