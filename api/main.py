from flask import Flask, render_template, redirect, url_for, jsonify
# from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
# from flask_wtf import FlaskForm
# from wtforms import StringField, SubmitField
# from wtforms.validators import DataRequired, URL
# from flask_ckeditor import CKEditor, CKEditorField
import time

## Delete this code:
# import requests
# posts = requests.get("https://api.npoint.io/43644ec4f0013682fc0d").json()

app = Flask(__name__)
app.config['SECRET_KEY'] = '8BYkEfBA6O6donzWlSihBXox7C0sKR6b'
# ckeditor = CKEditor(app)
# Bootstrap(app)

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


##WTForm
# class CreatePostForm(FlaskForm):
#     title = StringField("Blog Post Title", validators=[DataRequired()])
#     subtitle = StringField("Subtitle", validators=[DataRequired()])
#     author = StringField("Your Name", validators=[DataRequired()])
#     img_url = StringField("Blog Image URL", validators=[DataRequired(), URL()])
#     body = StringField("Blog Content", validators=[DataRequired()])
#     submit = SubmitField("Submit Post")


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


# @app.route("/about")
# def about():
#     return render_template("about.html")
#
#
# @app.route("/contact")
# def contact():
#     return render_template("contact.html")
