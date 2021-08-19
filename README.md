# Plum

This is a company website made for cybersecurity education focus on a fictional 
company PLUM.

## Experience

The project was designed as a learning tool for both students and myself. While
the studends are served all of the information that they require, I gain 
understanding building a SPA (Single Page Application) using technologies which
are newer to me, in this case React.

## Regarding content and development

Since the project is surrounding a fictional company and much of the content
will not change too frequently, at least between development stages and cycles
or is otherwise ongoing. The content falls into both static and dynamic. While
in most cases, content would be derived from CMS or database and rendered
dynamically; I think that is largely unecessary considering this projects scope.

### Static content

Rather than rely on requests from external CMS or databases, I chose to mimick
this behaviour by creating a localised 'data store' in the form of db.json. This
is such that I can create repeating and reusable react components, but suplly it
with necessary data through iteration.

### Dynamic content

Some of the dynamic content is feigned by still reading from the local db.json.
As the project grows in features and functionality, by including ideas such as 
wall posts or message boards etc. This will need to be dynamically pulled from 
something more than the fake local store. I have build this project with the
capability of connecting to Airtables base for that reason should it be required
in it's current state however I don't think this is required and will merely
slow down the application by waiting on API requests.

# Maintenance and Improvements

The current state of operation is rather messy due the initial nature it was 
designed to be. Going forward different improvements can be added.

## Improvements

Firstly the data should be migrated outside of the db.json and with that the 
data should be designed and constructed in a more efficient manner. This should
also be reflected within the objects that pull their relevant data. React is
designed to have reusable components and has somewhat been utilised in that way,
however the components designed in this project could be more generic and 
adaptable, which is something to consider going forward.

## Learning curve

Components should be more wholeistically and intrinsically designed. They were
somewhat pieced together in an ad-hoc fasion whilst being designed on the fly
simply due to time constraints and learning experience. Each should really be 
inspected for their purpose of use and designed and could be improved to be 
stand-alone and reusable.

## Maintenance

Little maintenance should be rquired going forward, but as with the above point
a lot of the code could be cleaned up somewhat for ease of use and readability.

# Log

## 2021-08-20

### Initial deploy

Deployed in initial state as first conception with intention of being improved
over time.