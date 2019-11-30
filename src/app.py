from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/books.html', methods=['GET','POST'])
def books():
    return render_template('books.html')

@app.route('/cool.html', methods=['GET','POST'])
def cool():
    return render_template('cool.html')

@app.route('/countries.html', methods=['GET','POST'])
def countries():
    return render_template('countries.html')

@app.route('/funny.html', methods=['GET','POST'])
def funny():
    return render_template('funny.html')

@app.route('/interesting.html', methods=['GET','POST'])
def interesting():
    return render_template('interesting.html')

@app.route('/movies.html', methods=['GET','POST'])
def movies():
    return render_template('movies.html')

@app.route('/random.html', methods=['GET','POST'])
def random():
    return render_template('random.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')