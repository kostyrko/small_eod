# Generated by Django 2.2.9 on 2020-11-12 01:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("authkey", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="key",
            options={"verbose_name": "Key", "verbose_name_plural": "Keys"},
        ),
        migrations.AlterModelOptions(
            name="scope",
            options={"verbose_name": "Scope", "verbose_name_plural": "Scopes"},
        ),
        migrations.RemoveField(
            model_name="key",
            name="created_by",
        ),
        migrations.RemoveField(
            model_name="key",
            name="modified_by",
        ),
    ]
