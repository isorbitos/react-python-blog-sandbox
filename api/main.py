import datetime

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
app.config['SECRET_KEY'] = '8BYkEfBA6O6donzWlSihBXox7C0sKR6b'

##CONNECT TO DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

##CONFIGURE TABLE
class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), unique=True, nullable=False)
    subtitle = db.Column(db.String(250), nullable=False)
    date = db.Column(db.String(250), nullable=False)
    body = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(250), nullable=False)
    img_url = db.Column(db.String(250), nullable=False)

    def to_dict(self):
        dictionary = {}
        for column in self.__table__.columns:
            dictionary[column.name] = getattr(self, column.name)
        return dictionary



@app.route('/allPosts')
def get_all_posts():
    posts = db.session.query(BlogPost).all()
    return jsonify(posts=[post.to_dict() for post in posts])


@app.route("/posts/<int:post_id>")
def show_post(post_id):
    requested_post = db.session.query(BlogPost).filter_by(id=post_id).first()
    if requested_post:
        return jsonify(post=requested_post.to_dict())
    return jsonify(error={"Not found": "Sorry, no post with this ID."}), 404


@app.route("/new-post", methods=["GET", "POST"])
def add_new_post():
    post_data = request.get_json()

    new_post = BlogPost(
        title=post_data['title'],
        subtitle=post_data['subtitle'],
        body=post_data['body'],
        img_url=post_data['img_url'],
        author=post_data['author'],
        date=datetime.datetime.fromtimestamp(float(post_data['date'])/1000.0).strftime("%B %d, %Y")
    )
    db.session.add(new_post)
    db.session.commit()
    return jsonify(message={"OK": "server got info!!!"}), 200

@app.post("/edit-post/<int:post_id>")
def edit_post(post_id):
    post = BlogPost.query.get(post_id)
    if post:
        post_data = request.get_json()

        # post.title = post_data['title']
        # post.subtitle = post_data['subtitle']
        # post.img_url = post_data['img_url']
        # post.author = post_data['author']
        post.body = post_data['body']
        db.session.commit()
        return jsonify(message={"OK": "hi got info!!!"}), 200

    return jsonify(error={"OK": "someting wrong"}), 404

@app.delete("/delete/<int:post_id>")
def delete_post(post_id):
    post_to_delete = BlogPost.query.get(post_id)
    if post_to_delete:
        db.session.delete(post_to_delete)
        db.session.commit()
        return jsonify(message={"OK": "Post deleted!!!"}), 200
    return jsonify(error={"OK": "someting wrong"}), 404


# @app.route("/about")
# def about():
#     return render_template("about.html")
#
#
# @app.route("/contact")
# def contact():
#     return render_template("contact.html")

