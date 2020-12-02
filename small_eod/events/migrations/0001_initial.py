# Generated by Django 2.2.9 on 2020-11-04 04:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("cases", "0013_auto_20190302_0518"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Event",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "modified_on",
                    models.DateTimeField(
                        auto_now=True, verbose_name="Date of the modification"
                    ),
                ),
                (
                    "created_on",
                    models.DateTimeField(
                        auto_now_add=True, verbose_name="Date of creation"
                    ),
                ),
                (
                    "date",
                    models.DateTimeField(
                        help_text="Date of event.", verbose_name="Date"
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        help_text="Name of event.", max_length=256, verbose_name="Name"
                    ),
                ),
                (
                    "comment",
                    models.CharField(
                        help_text="Comment text.",
                        max_length=256,
                        verbose_name="Comment",
                    ),
                ),
                (
                    "case",
                    models.ForeignKey(
                        help_text="Case for this event.",
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        to="cases.Case",
                        verbose_name="Case",
                    ),
                ),
                (
                    "created_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        related_name="event_created_by",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Created by",
                    ),
                ),
                (
                    "modified_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        related_name="event_modified_by",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Modified by",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
